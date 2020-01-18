##################################################
#	Commands for build, deploy and test	 #
##################################################

#------- Boot and Delete development server -----#
up:
	docker-compose up --build
down:
	docker-compose down -v

#-------------- Test prod containers ------------#
test-prod:
	docker-compose -f docker-compose.prod.yml up --build

#------ Required for local devdependencies-------#
install-deps:
	npm install --prefix ./frontend
	npm install --prefix ./backend
uninstall-deps:
	rm -rf frontend/node_modules
	rm -rf backend/node_modules

#--- Required code linting for repo standards ---#
lint-frontend: 
	docker-compose exec frontend npm run lint
lint-backend: 
	docker-compose exec backend npm run lint
