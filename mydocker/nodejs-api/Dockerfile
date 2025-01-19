FROM node:22-alpine3.19

RUN addgroup -g 1001 -S api-group && \
    adduser -u 1001 -S api-user -G api-group

WORKDIR /app

COPY package*.json .

RUN chown -R api-user:api-group /app

RUN npm install -g express lowdb
RUN npm link express 


COPY server.js .
COPY products.json .

EXPOSE 3009

USER api-user

CMD ["node", "server.js"]