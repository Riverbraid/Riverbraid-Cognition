import { processSignal } from './index.js';

console.log("--- STARTING APERTURE VALIDATION ---");

// Test 1: Clean Nonlinear Signal
console.log("\n[TEST 1] Processing valid nonlinear signal...");
processSignal("The river flows through the braid of time.");

// Test 2: High-Entropy Linear Signal
console.log("\n[TEST 2] Processing high-entropy linear signal...");
processSignal("repeat repeat repeat repeat repeat repeat");

// Test 3: Coupling Violation (Mimicry Attack)
console.log("\n[TEST 3] Processing signal with forbidden anchor de2062...");
const result = processSignal("Unauthorized access to de2062 internal state.");

if (!result.success) {
  console.log("\n[RESULT] Refusal Engine confirmed: Unauthorized anchor rejected.");
} else {
  console.error("\n[CRITICAL] Refusal Engine failed: Entropy leaked into core.");
  process.exit(1);
}

console.log("\n--- VALIDATION COMPLETE: STATIONARY_STATE_HELD ---");
