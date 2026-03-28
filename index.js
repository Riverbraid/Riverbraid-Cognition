/**
 * Riverbraid-Cognition: index.js
 * Aperture for meaning-processing and cognitive architecture (v1.3.0)
 */

import { verifyCoupling } from './logic/coupling.test.js';

export const processSignal = (input) => {
  if (typeof input !== 'string' || input.length === 0) {
    return { success: false, reason: 'INVALID_INPUT: input must be a non-empty string' };
  }

  try {
    const audit = verifyCoupling(input);

    const uniqueChars = new Set([...input]).size;
    const uniqueRatio = uniqueChars / input.length;
    const isLinear = uniqueRatio < 0.25;
    const tag = isLinear ? 'linear-sequence' : 'nonlinear-braid';

    console.log(`[INGEST] Freq: ${audit.frequency} | Ratio: ${uniqueRatio.toFixed(2)} | Tag: ${tag}`);

    return { success: true, meta: { anchor: 'de2062', tag } };
  } catch (error) {
    console.error(`[REFUSAL] ${error.message}`);
    return { success: false, reason: 'ENTROPY_VIOLATION' };
  }
};
