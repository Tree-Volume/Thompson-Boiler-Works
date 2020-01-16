##################################################
#	Commands for build, deploy and test	 #
##################################################
up:
	docker-compose up --build
down:
	docker-compose down -v
lint-frontend: 
	docker-compose exec frontend npm run lint
lint-backend: 
	docker-compose exec backend npm run lint
