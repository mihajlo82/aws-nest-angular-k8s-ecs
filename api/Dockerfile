

# backend/Dockerfile
FROM node:18

# Install netcat-openbsd for health checks
RUN apt-get update && apt-get install -y netcat-openbsd && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install


# Copy all source code
COPY . .

# Build TypeScript (after all files are copied)
RUN npm run build

# Copy entrypoint script and make it executable
COPY entrypoint.sh ./
RUN chmod +x entrypoint.sh

# Use entrypoint.sh as entrypoint
ENTRYPOINT ["./entrypoint.sh"]
