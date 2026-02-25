# GYM Admin App

A modern Vue.js admin application for gym management, built with cutting-edge web technologies and containerized for easy development and deployment.

## Technologies

This project is built with the following modern web technologies:

- **Vue 3** - Progressive JavaScript framework for building user interfaces
- **TypeScript** - Type-safe JavaScript for better code quality and developer experience
- **Vite** - Fast build tool and development server
- **Vue Router** - Official routing solution for Vue.js
- **Pinia** - State management library for Vue.js
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Font Awesome** - Icon library for rich UI components
- **Docker & Docker Compose** - Containerization for consistent development environments

## Development Commands

The project uses Docker for development. All commands are available through the Makefile:

```sh
make create-context    # Create Docker context if it doesn't exist
make up               # Start the development environment
make down             # Stop the development environment
make logs             # Show logs from the running container
make shell            # Open a shell in the running container
make clean            # Remove containers, images, and volumes
make install          # Install node packages
make serve            # Execute development server
make help             # Show available commands
```

## Quick Start

1. Start the development environment:
   ```sh
   make up
   ```

2. Install dependencies (if needed):
   ```sh
   make install
   ```

3. Run the development server:
   ```sh
   make serve
   ```

The application will be available at `http://localhost:8080` (or as configured in your Docker setup).
