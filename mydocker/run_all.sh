#!/bin/sh

docker rmi mynginx mynodejs mynodeapi

docker build ./nodejs-api -t mynodeapi --network=host

docker build ./nginx -t mynginx --network=host

docker build ./nodejs -t mynodejs --network=host