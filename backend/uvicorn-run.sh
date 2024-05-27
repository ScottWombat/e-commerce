#!/bin/sh -e

uvicorn app.app:app --reload ${@}