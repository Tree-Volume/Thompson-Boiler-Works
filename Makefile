##################################################
#	Commands for build, deploy and test	 #
##################################################

#------- Boot and Delete development server -----#
up:
	docker-compose up --build
down:
	docker-compose down -v


#------ Required for local devdependencies ------#
install-deps:
	npm install --prefix frontend
	npm install --prefix backend
uninstall-deps:
	rm -rf frontend/node_modules
	rm -rf backend/node_modules

#--------- Test code for repo standards ---------#
test:
	npm run --prefix frontend test
	npm run --prefix backend test
test-frontend: 
	npm run --prefix frontend test 
test-backend: 
	npm run --prefix backend test 

#--- Required code linting for repo standards --#
lint: 
	npm run --prefix frontend lint
	npm run --prefix backend lint
lint-frontend: 
	npm run --prefix frontend lint
lint-backend: 
	npm run --prefix backend lint
