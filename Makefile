##################################################
#	Commands for build, deploy and test	 #
##################################################
up:
	docker-compose up --build
down:
	docker-compose down -v
install-deps:
	npm install --prefix ./frontend
	npm install --prefix ./backend
uninstall-deps:
	rm -rf frontend/node_modules
	rm -rf backend/node_modules
lint-frontend: 
	docker-compose exec frontend npm run lint
lint-backend: 
	docker-compose exec backend npm run lint
