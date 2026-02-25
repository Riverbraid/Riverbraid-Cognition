/**
 * Riverbraid-Cognition: index.js
 * The Primary Refusal Engine (Calibrated v1.1)
 */

import { verifyCoupling } from './logic/coupling.test.js';

export const processSignal = (input) => {
  try {
    const audit = verifyCoupling(input);
    
    // Scale Separation Gate: Refined Entropy Check
    // We calculate the Unique Character Ratio. 
    // Repetitive noise has low ratio; braided meaning has high ratio.
    const uniqueRatio = new Set(input).size / input.length;
    const isLinear = uniqueRatio < 0.25; // Strict threshold for repetition
    const tag = isLinear ? "linear-sequence" : "nonlinear-braid";

    console.log(`[INGEST] Freq: ${audit.frequency} | Ratio: ${uniqueRatio.toFixed(2)} | Tag: ${tag}`);

    return {
      success: true,
      meta: { anchor: "de2062", tag: tag }
    };
  } catch (error) {
    console.error(`[REFUSAL] ${error.message}`);
    return { success: false, reason: "ENTROPY_VIOLATION" };
  }
};
