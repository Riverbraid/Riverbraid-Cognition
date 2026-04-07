import { execSync } from 'child_process';

/**
 * Relational Intelligence: The Logic of Multiplicity.
 * Evaluates if an external request aligns with the internal stationary state.
 */
const evaluateRelation = (requestSource) => {
  try {
    const rawMirror = execSync('node /workspaces/Riverbraid-Interface-Gold/bin/mirror.mjs').toString();
    const state = JSON.parse(rawMirror);

    const decision = {
      source: requestSource,
      internal_frequency: state.signals.frequency,
      status: (state.signals.frequency === 1) ? "RECEPTIVE" : "CLOSED",
      protocol: "Riverbraid-Relational-v1",
      timestamp: new Date().toISOString()
    };

    return decision;
  } catch (e) {
    return { status: "ERROR", detail: "Internal mirror unreachable." };
  }
};

const [,, source] = process.argv;
console.log(JSON.stringify(evaluateRelation(source || "UNKNOWN"), null, 2));
