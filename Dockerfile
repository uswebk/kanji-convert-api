FROM node:15-alpine
WORKDIR /src
COPY package*.json ./
RUN RUN rm -r node_modules; npm install
COPY . .
