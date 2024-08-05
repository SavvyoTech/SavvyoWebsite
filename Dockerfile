FROM oven/bun:latest

# Set the working directory
WORKDIR /app

# Copy the package.json and bun.lockb files
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy the rest of the application code
COPY . .

# Build the application
RUN bun --bun run build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["bun", "--bun", "start"]
