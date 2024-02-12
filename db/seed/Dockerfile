FROM mongo
# Will be set through Environment Files
ARG DATABASE_URI
ARG USERNAME
ARG PASSWORD

ENV DATABASE_URI ${DATABASE_URI}
ENV USERNAME ${USERNAME}
ENV PASSWORD ${PASSWORD}

COPY data/census.json /data/census.json
COPY data/sample.json /data/sample.json
COPY data/products.json /data/products.json
COPY data/articles.csv /data/articles.csv



 CMD mongoimport --username ${USERNAME} --password ${PASSWORD} --uri ${DATABASE_URI} --collection census --file /data/census.json --jsonArray && \
     mongoimport --username ${USERNAME} --password ${PASSWORD} --uri ${DATABASE_URI} --collection products --file /data/products.json --jsonArray && \
     mongoimport --username ${USERNAME} --password ${PASSWORD} --uri ${DATABASE_URI} --collection sample  --file /data/sample.json --jsonArray && \
     mongoimport --username ${USERNAME} --password ${PASSWORD} --uri ${DATABASE_URI} --collection sample  --file /data/articles.csv --type csv --headerline && \
     mongoimport --username ${USERNAME} --password ${PASSWORD} --uri ${DATABASE_URI} --collection articles  --file /data/articles.csv --type csv --headerline



