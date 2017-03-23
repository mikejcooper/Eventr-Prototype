Run container

$ docker-compose up





Utils:

Images 'name': "web" and "db"

Run commands in docker container: e.g. npm install
$ docker-compose run $(name) 
$ docker-compose run $(name) npm install X

Remove docker images
$ docker rm $(docker ps -a -q)
$ docker rmi $(docker images -q)

Stop all containers: 
$ docker stop $(docker ps -a -q)
Remove all: 
$ docker rm -f $(docker ps -a -q) && docker rmi -f $(docker images -q) && docker volume prune


Maarten:
when package.json is updated
invalidate container - remove it 
docker run web npm install
