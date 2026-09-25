import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { test } from 'node:test';

const root = path.resolve(import.meta.dirname, '..');
const script = path.join(root, 'scripts/review-snapshot.mjs');

test('creates and invalidates evidence-bound review snapshots', () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'fanui-review-'));
  const source = path.join(temp, 'page.html');
  const evidence = path.join(temp, '375.png');
  const report = path.join(temp, 'report.json');
  const snapshot = path.join(temp, '.fanui/reviews/home/review.json');
  fs.writeFileSync(source, '<main>ready</main>');
  fs.writeFileSync(evidence, 'image-v1');
  fs.writeFileSync(report, JSON.stringify({
    target: 'home',
    disposition: 'ship',
    score: 91,
    source_revision: 'abc123',
    source_paths: ['./page.html'],
    evidence_paths: ['./375.png'],
    checklist_passed: true,
    reviewer: { id: 'independent-reviewer', independent: true },
    hard_failures: [],
    issues: [],
    accepted_limitations: [],
  }));

  const created = spawnSync(process.execPath, [script, 'create', report, snapshot], { encoding: 'utf8' });
  assert.equal(created.status, 0, created.stderr);
  assert.equal(spawnSync(process.execPath, [script, 'verify', snapshot]).status, 0);

  fs.writeFileSync(source, '<main>changed</main>');
  assert.equal(spawnSync(process.execPath, [script, 'verify', snapshot]).status, 1);
});

test('refuses ship when hard failures remain', () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'fanui-review-'));
  const source = path.join(temp, 'page.html');
  const evidence = path.join(temp, '375.png');
  const report = path.join(temp, 'report.json');
  fs.writeFileSync(source, '<main>ready</main>');
  fs.writeFileSync(evidence, 'image-v1');
  fs.writeFileSync(report, JSON.stringify({
    target: 'home', disposition: 'ship', score: 91, source_revision: 'abc123',
    source_paths: ['./page.html'], evidence_paths: ['./375.png'], checklist_passed: true,
    reviewer: { id: 'independent-reviewer', independent: true },
    hard_failures: ['whole-page-overflow'], issues: [], accepted_limitations: [],
  }));
  const result = spawnSync(process.execPath, [script, 'create', report, path.join(temp, 'review.json')], { encoding: 'utf8' });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /cannot use the ship disposition/);
});

test('refuses ship with open issues or incomplete review authority', () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'fanui-review-'));
  fs.writeFileSync(path.join(temp, 'page.html'), '<main>ready</main>');
  fs.writeFileSync(path.join(temp, '375.png'), 'image-v1');
  const report = path.join(temp, 'report.json');
  fs.writeFileSync(report, JSON.stringify({
    target: 'home', disposition: 'ship', score: 92, source_revision: 'abc123',
    source_paths: ['./page.html'], evidence_paths: ['./375.png'], checklist_passed: true,
    reviewer: { id: 'author', independent: false }, hard_failures: [], accepted_limitations: [],
    issues: [{ id: 'copy-truth', severity: 'P1', status: 'open', evidence: 'hero', expected: 'sourced claim' }],
  }));
  const result = spawnSync(process.execPath, [script, 'create', report, path.join(temp, 'review.json')], { encoding: 'utf8' });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /independent reviewer|open issues/);
});
