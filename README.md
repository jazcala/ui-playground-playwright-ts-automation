# 🎭 Playwright Automation

## *Advanced Solutions for UI Testing Challenges*

This repository is a comprehensive, production-ready test automation portfolio built with **Playwright** and **TypeScript**. It covers the full spectrum of UI automation challenges, from basic interactions to complex synchronization and environmental engine discrepancies.

---

## 🏗️ Architecture & Tech Stack

* **Language:** TypeScript (Strict Mode)
* **Framework:** Playwright Test
* **Pattern:** Page Object Model (POM) with Custom Fixtures
* **Tooling:** ESLint, Commitlint, Husky (Pre-push hooks)
* **DevOps:** Dockerized execution environment
* **Reporting:** Live HTML Reports via **GitHub Pages**

---

## 🚀 Engineering Highlights & Technical Discoveries

### 1. Intelligent State Synchronization (Disabled Input)

**Problem:** Interacting with elements that are present in the DOM but remain disabled until a background process completes.
**Solution:** Utilized a **Web-First Assertion** with a custom timeout:
`await expect(inputField).toBeEnabled({ timeout: 6000 });`

* Leverages Playwright's native polling mechanism, ensuring the test proceeds the moment the element becomes interactable.

### 2. Trusted Event Investigation (The Click Challenge)

**Challenge:** Elements that ignore standard synthetic JavaScript events.
**The Discovery:**

* **Implementation:** Developed coordinate-based interaction using Playwright’s low-level `page.mouse` API.
* **Constraints:** Documented environment-specific behaviors where OS-level factors impact Headed vs. Headless execution.
* **Senior Strategy:** Used `test.fixme()` to maintain a stable, green CI pipeline while documenting engine-specific limitations.

### 3. Full-Spectrum UI Coverage

The framework includes specialized solutions for:

* **Shadow DOM:** Piercing encapsulation for deep-element interaction.
* **Dynamic Tables:** Verification of shifting data grids.
* **Complex Overlays:** Handling hidden layers and overlapped elements.

---

## 📁 Project Structure

```bash
.
├── Dockerfile               # Containerized test execution
├── fixtures/                # Custom fixtures for clean POM injection
├── pages/                   # POM: Encapsulated logic for 20+ UI challenges
├── tests/                   # Spec files covering all UITAP scenarios
├── scripts/pre-push.sh      # Git hooks for quality assurance before pushing
├── utils/                   # Test data and shared constants
└── playwright.config.ts     # Multi-browser & parallel execution config
