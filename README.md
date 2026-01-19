# 🎭 Playwright Automation: UI Chalenges & Edge Cases

Advanced Playwright + TypeScript framework designed to solve complex UI automation pitfalls (Event-blocking, State-transitions, Async-sync).

## 🏛️ Project Overview

This repository serves as a comprehensive technical portfolio, automating the [UI Test Automation Playground](http://www.uitestingplayground.com/). Instead of basic interactions, this project focuses on resilient engineering—handling scenarios where traditional automation tools often fail.

---

## 🏗️ Architecture & Tech Stack

* **Language:** TypeScript (Strict Mode)
* **Framework:** Playwright Test
* **Pattern:** Page Object Model (POM) with Custom Fixtures
* **DevOps:** Dockerized execution environment
* **Tooling:** ESLint, Commitlint, Husky (Pre-push hooks)
* **Reporting:** Live HTML Reports via **GitHub Pages**

## 🛡️ Quality Guardrails

This project implements a "Shift-Left" approach to code quality:

* **Conventional Commits:** Integrated with `commitlint` to ensure a readable and standardized git history.
* **Static Analysis:** ESLint enforces TypeScript best practices and catches potential logic errors during development.
* **Git Hooks:** `Husky` executes linting and validation scripts on every push, ensuring only "Green" code reaches the remote repository.

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
```

## 🚀 How to Run

1. **Install Dependencies**

   ```bash
   npm install
   ```

1. **Run All Tests**

   ```bash
   npx playwright test
   ```

1. **Run Specific Suite**

   ```bash
   npx playwright test --project=chromium # UI Only
   ```

### **🐳 Running with Docker**

To ensure a consistent environment and avoid "it works on my machine" issues, you can run the suite using the official Playwright Docker image:

1. Build the Image

   ```bash
   docker build -t playwright-automation .
   ```

1. Run Tests in Container

   ```bash
   docker run --rm -v $(pwd):/app/ playwright-automation npx playwright test
   ```

## **📊 Reports**

After execution, the report is automatically generated. To view the latest results locally:

  ```bash
  npx playwright show-report
  ```

---

### 🏛️ Pro-Tip: The `Dockerfile`

To make those Docker commands work, make sure you have a simple `Dockerfile` in your root folder. If you don't have one yet, here is a standard one that works perfectly with Playwright:

  ```dockerfile
  # Use the official Playwright image with all browsers pre-installed
  FROM mcr.microsoft.com/playwright:v1.57.0-noble

  # Set the working directory
  WORKDIR /app

  # Copy package files and install dependencies
  COPY package*.json ./
  RUN npm install

  # Copy the rest of the project
  COPY . .

  # Default command
  CMD ["npx", "playwright", "test"]
  ```

---
