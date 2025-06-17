# ---------- 1. Build Stage ----------
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy only the package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the code (TS source)
COPY . .

# Build the app (transpile TS to JS)
RUN npm run build


# ---------- 2. Production Stage ----------
FROM node:18-alpine

# Set working directory again
WORKDIR /app

# Only copy necessary files from builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# If you use a .env or config file, copy that too (optional)
# COPY .env ./

# Start the server
CMD ["node", "dist/index.js"]
