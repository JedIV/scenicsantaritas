FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy built files and server from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.mjs ./server.mjs

# Expose port
EXPOSE 3000

# Start the server
CMD ["node", "server.mjs"]
