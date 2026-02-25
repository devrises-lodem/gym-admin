.PHONY: up down logs shell clean create-context

# Docker context name
CONTEXT_NAME = admin-app-gym

# Default target
help:
	@echo "Available commands:"
	@echo "  make create-context - Create Docker context if it doesn't exist"
	@echo "  make up      - Start the development environment"
	@echo "  make down    - Stop the development environment"
	@echo "  make logs    - Show logs from the running container"
	@echo "  make shell   - Open a shell in the running container"
	@echo "  make clean   - Remove containers, images, and volumes"
	@echo "  make install - Install node packages"
	@echo "  make serve   - Execute development server"
	@echo "  make help    - Show this help message"

create-context:
	@if ! docker context ls | grep -q "$(CONTEXT_NAME)"; then \
		docker context create $(CONTEXT_NAME); \
		echo "Created Docker context: $(CONTEXT_NAME)"; \
	else \
		echo "Docker context $(CONTEXT_NAME) already exists"; \
	fi

up: create-context
	docker context use $(CONTEXT_NAME)
	docker compose up -d

down:
	docker context use $(CONTEXT_NAME)
	docker compose down

logs:
	docker context use $(CONTEXT_NAME)
	docker compose logs -f

shell:
	docker context use $(CONTEXT_NAME)
	docker compose exec admin-app sh

clean:
	docker context use $(CONTEXT_NAME)
	docker compose down -v --rmi all


install:
	@if [ ! -d "node_modules" ]; then \
		docker context use $(CONTEXT_NAME); \
		docker compose exec admin-app pnpm install; \
	fi

serve: up install
	docker context use $(CONTEXT_NAME)
	docker compose exec admin-app pnpm run serve