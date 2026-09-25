import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { test } from 'node:test';
import Ajv2020 from 'ajv/dist/2020.js';

const root = path.resolve(import.meta.dirname, '..');
const load = (name) => JSON.parse(fs.readFileSync(path.join(root, 'schemas', name), 'utf8'));
const compile = (name) => new Ajv2020({ allErrors: true }).compile(load(name));

test('workflow context schema accepts the documented routing record', () => {
  const validate = compile('fanui-context.schema.json');
  assert.equal(validate({
    workflow: 'build', experience: 'web_app', primary_task: 'operate workflow',
    change_mode: 'preserve', brief_read: true, expression_profile: 'quiet',
    evidence_available: ['requirements'], unresolved_decisions: [],
    expression_axes: { composition_order: 'linear', visual_amplitude: 'low', motion_intensity: 'restrained', narrative_axis: 'product_evidence' },
  }), true, JSON.stringify(validate.errors));
  assert.equal(validate({
    workflow: 'build', experience: 'web_app', primary_task: 'operate workflow',
    change_mode: 'redesign', brief_read: {}, expression_profile: 'kinetic',
  }), false);
});

test('pattern capsule schema accepts the documented wrapper and snake-case fields', () => {
  const validate = compile('pattern-capsule.schema.json');
  assert.equal(validate({
    page_pattern_capsule: {
      id: 'docs-article', name: 'Docs article', status: 'candidate',
      experience_families: ['documentation'], use_when: ['task reading'], avoid_when: ['campaign'],
      required_content_and_state: ['article'], responsive_or_window_transformations: { mobile_or_minimum: 'drawer' },
      accessibility_contract: ['landmarks'], content_truth_constraints: ['sourced examples'],
      evidence: { observed_sources: ['reference'], fanui_snapshots: ['375.png'] },
    },
  }), true, JSON.stringify(validate.errors));
});

test('finish report schema requires independent review metadata and closure fields', () => {
  const validate = compile('review-report.schema.json');
  const report = {
    target: 'home', disposition: 'ship', score: 90, source_revision: 'abc123',
    source_paths: ['./page.html'], evidence_paths: ['./375.png'], checklist_passed: true,
    reviewer: { id: 'reviewer-1', independent: true }, hard_failures: [], issues: [], accepted_limitations: [],
  };
  assert.equal(validate(report), true, JSON.stringify(validate.errors));
  assert.equal(validate({ ...report, reviewer: undefined }), false);
  assert.equal(validate({ ...report, score: 84 }), false);
  assert.equal(validate({ ...report, checklist_passed: false }), false);
  assert.equal(validate({ ...report, reviewer: { id: 'author', independent: false } }), false);
  assert.equal(validate({ ...report, hard_failures: ['overflow'] }), false);
  assert.equal(validate({ ...report, issues: [{ id: 'i1', severity: 'P1', status: 'open', evidence: '375.png', expected: 'fits' }] }), false);
  assert.equal(validate({
    ...report,
    disposition: 'fix',
    issues: [{ id: 'i2', severity: 'P2', status: 'accepted_with_reason', evidence: '375.png', expected: 'aligned' }],
  }), false);
});
