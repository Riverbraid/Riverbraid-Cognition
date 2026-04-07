import { execSync } from 'child_process';

const checkCoherence = () => {
  try {
    const rawStatus = execSync('node /workspaces/Riverbraid-Core/bin/status_provider.mjs').toString();
    const status = JSON.parse(rawStatus);
    
    if (status.status === "NOMINAL") {
      return { coherent: true, frequency: 1, signal: "STEADY", timestamp: new Date().toISOString() };
    } else if (status.status === "FAILURE" || status.error) {
      return { coherent: false, frequency: -1, signal: "SILENCE", timestamp: new Date().toISOString() };
    } else {
      return { coherent: false, frequency: 0, signal: "DISTORTED", timestamp: new Date().toISOString() };
    }
  } catch (e) {
    return { coherent: false, frequency: -1, signal: "SILENCE", timestamp: new Date().toISOString() };
  }
};

console.log(JSON.stringify(checkCoherence(), null, 2));
