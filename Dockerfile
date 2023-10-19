FROM node:18.0.0-alpine

WORKDIR /app

COPY ./package.json /app

RUN sh -c 'npm install --registry=https://registry.npmjs.org/'

COPY ./ /app

EXPOSE 5000