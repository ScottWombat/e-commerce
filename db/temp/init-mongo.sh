#!/bin/bash
set -eu
mongo -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD <<EOF
    db = db.getSiblingDB('$MONGO_INITDB_DATABASE');
    use '$MONGO_INITDB_DATABASE';
    db.createUser({
        user: 'john', 
        pwd: '12345', 
        roles: [{
            role: 'readWrite', 
            db: '$MONGO_INITDB_DATABASE'
        }]
    });
EOF