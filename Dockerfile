# Use the official Playwright image that matches your version
FROM mcr.microsoft.com/playwright:v1.57.0-noble

# Set the working directory
WORKDIR /app

# Copy package files first (to leverage Docker's cache)
COPY package*.json ./

# Install dependencies using 'npm ci' for a clean, deterministic install
RUN npm ci

# Copy the rest of your project
COPY . .

# Default command to run tests (can be overridden by docker run or compose)
CMD ["npx", "playwright", "test"]
