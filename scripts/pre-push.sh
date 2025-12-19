#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "🚀 Starting Pre-Push Validation..."

# 1. Linting check
echo "🔍 Running Linter..."
npm run lint

# 2. Type Checking
echo "🏗️ Checking Types..."
npx tsc --noEmit

# 3. Local Test Run
echo "🧪 Running Playwright Tests..."
npx playwright test

echo "✅ All checks passed! You are safe to push."
