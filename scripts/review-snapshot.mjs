import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Ajv2020 from 'ajv/dist/2020.js';

const dispositions = new Set(['recapture', 'rebuild', 'fix', 'ship']);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const reviewSchema = JSON.parse(fs.readFileSync(path.join(root, 'schemas/review-report.schema.json'), 'utf8'));
const validateSchema = new Ajv2020({ allErrors: true }).compile(reviewSchema);

function usage() {
  console.error('Usage: node scripts/review-snapshot.mjs create <report.json> <output.json> | verify <snapshot.json>');
  process.exit(2);
}

function filesFor(target) {
  const absolute = path.resolve(target);
  if (!fs.existsSync(absolute)) throw new Error(`Evidence path does not exist: ${target}`);
  if (fs.statSync(absolute).isFile()) return [absolute];
  return fs.readdirSync(absolute, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => path.join(entry.parentPath ?? entry.path, entry.name))
    .sort();
}

function fingerprint(targets) {
  const hash = crypto.createHash('sha256');
  for (const target of targets.flatMap(filesFor).sort()) {
    hash.update(path.resolve(target));
    hash.update('\0');
    hash.update(fs.readFileSync(target));
    hash.update('\0');
  }
  return hash.digest('hex');
}

function validateReport(report) {
  const { schemaVersion: _schemaVersion, createdAt: _createdAt, source_hash: _sourceHash, evidence_hash: _evidenceHash, ...contract } = report;
  if (contract.disposition === 'ship') {
    if (Array.isArray(contract.hard_failures) && contract.hard_failures.length) throw new Error('A report with hard failures cannot use the ship disposition.');
    if (typeof contract.score === 'number' && contract.score < 85) throw new Error('Ship requires a score of at least 85.');
    if (contract.checklist_passed === false) throw new Error('Ship requires checklist_passed=true.');
    if (contract.reviewer && contract.reviewer.independent === false) throw new Error('Ship requires an independent reviewer.');
    if (Array.isArray(contract.issues) && contract.issues.some((issue) => issue.status === 'open')) {
      throw new Error('Ship cannot contain open issues; resolve or explicitly accept them with a reason.');
    }
  }
  if (!validateSchema(contract)) {
    const errors = validateSchema.errors?.map((error) => `${error.instancePath || '/'} ${error.message}`).join('; ');
    throw new Error(`Report does not match review-report.schema.json: ${errors}`);
  }
  if (!dispositions.has(contract.disposition)) throw new Error('Disposition must be recapture, rebuild, fix, or ship.');
  for (const issue of contract.issues) {
    if (issue.status === 'accepted_with_reason' && !issue.acceptance_reason?.trim()) {
      throw new Error(`Accepted issue ${issue.id} requires acceptance_reason.`);
    }
  }
}

const [command, input, output] = process.argv.slice(2);
if (!command || !input) usage();

try {
  if (command === 'create') {
    if (!output) usage();
    const reportPath = path.resolve(input);
    const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
    validateReport(report);
    const base = path.dirname(reportPath);
    const resolveAll = (items) => items.map((item) => path.resolve(base, item));
    const snapshot = {
      schemaVersion: 1,
      createdAt: new Date().toISOString(),
      ...report,
      source_paths: resolveAll(report.source_paths),
      evidence_paths: resolveAll(report.evidence_paths),
    };
    snapshot.source_hash = fingerprint(snapshot.source_paths);
    snapshot.evidence_hash = fingerprint(snapshot.evidence_paths);
    fs.mkdirSync(path.dirname(path.resolve(output)), { recursive: true });
    fs.writeFileSync(path.resolve(output), `${JSON.stringify(snapshot, null, 2)}\n`);
    console.log(`FANUI_REVIEW_SNAPSHOT=CREATED ${path.resolve(output)}`);
  } else if (command === 'verify') {
    const snapshot = JSON.parse(fs.readFileSync(path.resolve(input), 'utf8'));
    validateReport(snapshot);
    const currentSourceHash = fingerprint(snapshot.source_paths);
    const currentEvidenceHash = fingerprint(snapshot.evidence_paths);
    const fresh = currentSourceHash === snapshot.source_hash && currentEvidenceHash === snapshot.evidence_hash;
    console.log(JSON.stringify({
      fresh,
      source: currentSourceHash === snapshot.source_hash ? 'current' : 'stale',
      evidence: currentEvidenceHash === snapshot.evidence_hash ? 'current' : 'stale',
    }, null, 2));
    process.exit(fresh ? 0 : 1);
  } else {
    usage();
  }
} catch (error) {
  console.error(`FANUI_REVIEW_SNAPSHOT=FAIL ${error.message}`);
  process.exit(1);
}
