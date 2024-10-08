#!/bin/sh

docker rmi mynginx mynodejs

docker build ./nginx -t mynginx --network=host

docker build ./nodejs -t mynodejs --network=host