#Remove all
docker system prune -af

#Create volumes
docker volume create mongo-db
docker volume create mongo-seed
docker volume create mongo-express
docker volume create redis-insight
docker volume create redis-cache

#Build all images
docker-compose up --build

