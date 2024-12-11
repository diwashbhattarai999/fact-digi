# Use a Node.js base image to build the project
FROM node:20 AS build

# Set the working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm@latest

# Copy package.json and pnpm-lock.yaml (if exists) to install dependencies
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the source code
COPY . .

# Build the React app
RUN pnpm run build

# Use Nginx to serve the built app
FROM nginx:alpine

# Copy the build directory to Nginx's HTML folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port Nginx will run on
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
