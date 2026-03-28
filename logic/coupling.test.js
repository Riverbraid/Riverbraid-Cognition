// Stationary Coupling Test
export function checkCoupling(internal, external) {
  const ratio = internal / (external + 1);
  return {
    isLinear: ratio <= 1.0,
    state: "stationary"
  };
}
