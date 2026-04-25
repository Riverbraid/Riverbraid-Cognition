---
**Status:** Stationary (v1.5.0)
**Normative Source:** Riverbraid-Core
**Verification:** `npm test`
**Authority:** 2-of-2 GPG Threshold
---

---
**Status:** Stationary (v1.5.0)
**Normative Source:** Riverbraid-Core
**Verification:** `npm test`
**Authority:** 2-of-2 GPG Threshold
---

<div align="center">

# O Riverbraid-Cognition

### The Aperture

**The cognitive architecture of the Riverbraid cluster.**

</div>

## Primary Invariants

* **Meaning as Frequency:** Meaning is the internal frequency required to successfully navigate environmental entropy.
* **Fail-Closed:** Any coupling between external noise and the internal core results in an immediate halt.
* **Stationary State:** All cognition is gated by the Merkle Root **d4935e**.

## Verification

```bash
npm install
node verify.mjs
node test-aperture.mjs
```

---
## Part of the Riverbraid Constellation
A self-verifying integrity substrate anchored to stationary Merkle root **de2062** (Sovereign layer **adef13**).
Verification: `node run-vectors.cjs verify`

---

## Riverbraid Steward Guide
**Welcome, Steward.**
This guide explains how to use Riverbraid using simple commands. You do not need to know programming. The system is built on a **stationary floor**—a locked foundation that detects unwanted changes across Windows, Linux, and macOS.

### Where to Run These Commands
1. **Open your terminal:** PowerShell (Windows) or Terminal/Git Bash (Linux/macOS).
2. **Navigate to the orchestration hub:**
   cd path/to/Riverbraid-Golds

### The Main Commands

#### 1. Check Everything (b-audit)
Runs a full check of the entire Riverbraid system to ensure no drift.
* **PowerShell:** .\bin\rb-audit.ps1
* **POSIX (Bash/Zsh):** ./bin/rb-audit.sh

#### 2. Lock Changes (b-seal)
Creates a new "stationary seal" once you have intentionally updated the system.
* **PowerShell:** .\bin\rb-seal.ps1
* **POSIX (Bash/Zsh):** ./bin/rb-seal.sh

#### 3. Connect a Petal (b-bridge)
Safely activates a specific part of the system (e.g., Cognition, Safety-Gold).
* **PowerShell:** .\bin\rb-bridge.ps1 Cognition
* **POSIX (Bash/Zsh):** ./bin/rb-bridge.sh Cognition

### Daily Workflow
1. **Audit:** Run the audit command for your OS. Ensure everything is green/verified.
2. **Work:** Perform your necessary updates.
3. **Verify:** Run the audit again to check the new state.
4. **Seal:** If changes are intentional, run the seal command to update the "Truth Record."

> **Note:** The system is **fail-closed**. If the terminal reports a failure, the system has protected itself from inconsistency. Do not force changes until the audit is clear.
