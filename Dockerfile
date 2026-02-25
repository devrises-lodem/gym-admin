FROM node:25-alpine

WORKDIR /app

# Install dependencies based on the preferred method
RUN npm install -g pnpm

# Use tail -f /dev/null to keep container running as per user rules
CMD ["tail", "-f", "/dev/null"]
