# ZAInnovate Technologies: Agent-to-Production Readiness Framework
**Document Ref:** ZAI-STD-ENG-001  
**Version:** 1.0.0  
**Effective Date:** 06 November 2026  
**Status:** Institutional Engineering Standard  
**Governing Authority:** Architecture & Engineering Board, ZAInnovate Technologies (East London, South Africa)

---

## 1. Executive Mandate & Purpose

The objective of software engineering at ZAInnovate Technologies—whether driven by human engineers or AI coding agents—is **never merely to produce an application that works during a demonstration.**

The mandatory objective is to produce **complete, independently verifiable, secure, maintainable, and commercially viable software products** that can be deployed, operated, and handed over without ongoing dependency on the authoring agent or developer.

### The Four Stages of Software Maturity
1. **Working Software:** The application appears to function under expected baseline inputs. *(Unacceptable for release)*
2. **Complete Software:** All intended features, exception paths, and workflows are implemented. *(Development milestone only)*
3. **Production-Ready Software:** Independently verified, security-hardened, tested across edge cases, and compliant with statutory requirements. *(Pre-deployment gate)*
4. **Plug-and-Play Software:** A fresh host or operator can configure, install, deploy, and operationalize the product from documentation alone without manual intervention or missing dependencies. *(Mandatory Release Target)*

---

## 2. Theoretical & Regulatory Foundations
This framework unifies international software engineering standards with South African statutory realities:
* **NIST SP 800-218:** Secure Software Development Framework (SSDF v1.1).
* **OWASP ASVS 5.0:** Application Security Verification Standard (Levels 1–3).
* **OWASP Top 10 for LLM Applications (2025/2026):** Mitigating excessive agency, prompt injection, and insecure tool usage.
* **Google SRE Launch Coordination:** Capacity, monitoring, failure recovery, and safe rollback standards.
* **SLSA (Supply Chain Levels for Software Artifacts):** Provenance, tamper resistance, and reproducible builds.
* **Protection of Personal Information Act (POPIA Act 4 of 2013):** Sections 19–22 (Security safeguards, operator agreements, mandatory data compromise notification).
* **Promotion of Access to Information Act (PAIA Act 2 of 2000):** Statutory information disclosure and record management.

---

## 3. The Five-Role Agentic Engineering Model
To eliminate self-certification bias (where the builder agent verifies its own output), all agentic workflows must enforce separation of duties:

```
[01 ARCHITECT] ───────► [02 BUILDER] ───────► [03 INDEPENDENT AUDITOR]
Requirements &          Implementation &        Adversarial Testing &
Acceptance Criteria     Automated Tests         Vulnerability Probing
                                                          │
                                                          ▼
[05 ACCEPTANCE & OPS] ◄────────────────────── [04 RELEASE ENGINEER]
Live Verification, Net Benefit                  CI/CD, Reproducible Builds
& Signed Acceptance Record                      & Rollback Procedures
```

* **Role 1 (Architect):** Establishes explicit acceptance criteria, boundary constraints, and non-functional requirements.
* **Role 2 (Builder):** Develops code, clean modular architecture, and unit/integration tests.
* **Role 3 (Independent Auditor):** Probes edge cases, tests invalid/malicious inputs, verifies security boundaries, and independently runs test suites. Accepts no unverified claims.
* **Role 4 (Release Engineer):** Packages reproducible builds, automates deployment, and tests rollbacks.
* **Role 5 (Operations & Business Acceptance):** Validates live production behavior, runbooks, documentation, and economic net benefit.

---

## 4. The 10 Master Production Verification Domains (115 Points)

| Domain | Scope & Focus | Verification Gate |
| :--- | :--- | :--- |
| **01. Requirements & Business** (9 checks) | Acceptance criteria, workflow completeness, edge cases, zero placeholders. | Mandatory PASS |
| **02. Architecture Foundations** (9 checks) | Modular code, environment isolation, externalized config, documented trade-offs. | Mandatory PASS |
| **03. Functional & UI** (10 checks) | Complete user journeys, error/empty states, responsiveness, accessibility. | Mandatory PASS |
| **04. Data Integrity & State** (10 checks) | Server/client validation, data retention, idempotency, concurrent updates. | Mandatory PASS |
| **05. Quality Assurance** (11 checks) | Unit, integration, negative, and regression tests. Zero ignored failures. | Mandatory PASS |
| **06. Cybersecurity & POPIA** (14 checks) | Zero secrets in code, XSS/injection prevention, POPIA sections 19–22 compliance. | Mandatory PASS |
| **07. AI-Agent Safeguards** (15 checks) | Bounded agency, human-in-the-loop for high-risk, untrusted tool output handling. | Mandatory PASS |
| **08. Release Engineering** (12 checks) | Reproducible builds, verifiable provenance, smoke tests, rollback procedures. | Mandatory PASS |
| **09. Monitoring & Reliability** (11 checks) | Error logging, metrics, disaster recovery, documented incident runbooks. | Mandatory PASS |
| **10. Handover & Plug-and-Play** (14 checks) | Clean bootstrap, self-contained documentation, commercial acceptance signed. | Mandatory PASS |

---

## 5. Commercial Net Benefit Equation
Software must deliver measurable economic surplus over its full operating lifecycle. Releases must document positive Net Benefit:

$$\text{Net Benefit} = \text{Labour Savings} + \text{Avoided Losses} + \text{Incremental Gross Profit} - \text{Total Operating Costs}$$

*Where Total Operating Costs must include: hosting, domain/SSL, API tokens, software licenses, human review, and maintenance.*

**Design Constraint:** Deterministic logic (calculations, tariffs, permissions, financial reconciliations) must always use standard code. AI agents should be utilized solely where reasoning, document parsing, or non-deterministic decision support adds genuine surplus.

---

## 6. Statutory GO / NO-GO Release Gate

Every deployment must culminate in a machine-verified and human-signed **Production Acceptance Record**:

* **GO:** 100% of applicable mandatory criteria verified with reproducible evidence. Zero unresolved critical defects or unhandled security vulnerabilities.
* **NO-GO:** Any unverified critical workflow, exposed secret, unhandled injection risk, failed test, or absent documentation halts deployment immediately.
* **CONDITIONAL GO:** Permitted strictly for sandboxed pilot environments with documented, bounded risks and explicit stakeholder sign-off.
