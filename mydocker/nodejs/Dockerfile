FROM node:22-alpine3.19 as builder

RUN apk update && apk upgrade --no-cache

RUN apk add nano curl

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY webpack.config.prod.js .
COPY src ./src
COPY public ./public
COPY .babelrc .
COPY typings.d.ts .

#COPY package.json .
RUN npm ci
RUN npm run build

FROM node:22-alpine3.19

WORKDIR /app

RUN npm install -g express
RUN npm link express

COPY server.js .
COPY --from=builder /app/dist ./dist/

EXPOSE 3000


CMD ["node", "server.js"]