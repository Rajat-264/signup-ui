# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Build the React app
RUN npm run build

# Install a lightweight static file server
RUN npm install -g serve

# Expose port 80 (Required for Railway)
EXPOSE 80

# Serve the React app on port 80
CMD ["serve", "-s", "build", "-l", "80"]
