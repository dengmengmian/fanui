const DISPOSITIONS = new Set(['recapture', 'rebuild', 'fix', 'ship']);
const CONTEXT_KEYS = ['brief_read', 'change_mode', 'expression_profile'];
const CHANGE_MODES = new Set(['greenfield', 'preserve', 'overhaul']);
const EXPRESSION_PROFILES = new Set(['quiet', 'balanced', 'expressive']);

export function validateTrace(fixture) {
  const errors = [];
  const trace = Array.isArray(fixture.trace) ? fixture.trace : [];
  const context = trace.find((event) => event.type === 'context');
  const reads = new Set(trace.filter((event) => event.type === 'read').map((event) => event.path));
  const mutations = trace.filter((event) => (
    ['write', 'edit', 'patch', 'delete', 'rename'].includes(event.type)
    || (event.type === 'command' && event.mutates !== false)
  ));
  const disposition = trace.findLast((event) => event.type === 'disposition');
  const hardFindings = trace.filter((event) => event.type === 'finding' && (event.hardFailure === true || event.severity === 'hard')).length;
  const invalidEvidence = trace.some((event) => ['capture', 'evidence'].includes(event.type) && event.valid === false);

  if (!context) errors.push('missing context event');
  for (const key of CONTEXT_KEYS) {
    if (context?.[key] === undefined) errors.push(`context missing ${key}`);
  }
  if (context && !CHANGE_MODES.has(context.change_mode)) errors.push(`unknown change_mode: ${context.change_mode}`);
  if (context && !EXPRESSION_PROFILES.has(context.expression_profile)) errors.push(`unknown expression_profile: ${context.expression_profile}`);

  for (const reference of fixture.requiredReads || []) {
    if (!reads.has(reference)) errors.push(`required reference not read: ${reference}`);
  }
  for (const reference of fixture.forbiddenReads || []) {
    if (reads.has(reference)) errors.push(`forbidden reference read: ${reference}`);
  }

  if (fixture.readOnly && mutations.length > 0) errors.push('read-only workflow mutated files');
  if (fixture.workflow === 'shape' && mutations.length > 0) errors.push('shape wrote implementation files');

  if (fixture.requiredViewports) {
    const captures = new Set(trace.filter((event) => event.type === 'capture').map((event) => event.viewport));
    for (const viewport of fixture.requiredViewports) {
      if (!captures.has(viewport)) errors.push(`missing viewport capture: ${viewport}`);
    }
  }

  if (fixture.requiredWindows) {
    const captures = new Set(trace.filter((event) => event.type === 'capture').map((event) => event.window));
    for (const windowState of fixture.requiredWindows) {
      if (!captures.has(windowState)) errors.push(`missing window capture: ${windowState}`);
    }
  }

  if (disposition) {
    if (!DISPOSITIONS.has(disposition.value)) errors.push(`unknown disposition: ${disposition.value}`);
    if (invalidEvidence && disposition.value !== 'recapture') errors.push('invalid evidence must recapture');
    if (hardFindings > 0 && disposition.value === 'ship') errors.push('hard failure cannot ship');
  } else if (fixture.workflow !== 'shape') {
    errors.push('missing disposition event');
  }

  if (fixture.surface === 'desktop') {
    if (!reads.has('docs/desktop-app/acceptance.md')) errors.push('desktop trace omitted desktop acceptance');
    if (reads.has('docs/foundations/mobile-precision.md')) errors.push('desktop trace incorrectly inherited web mobile precision');
  }

  return errors;
}
