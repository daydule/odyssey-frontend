FROM node:18.17-bullseye
WORKDIR /odyssey/
COPY ./package*.json ./
RUN npm ci && mv ./node_modules /