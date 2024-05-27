#!/bin/sh -e

gunicorn app.app:app -c app/conf/gunicorn_config.py