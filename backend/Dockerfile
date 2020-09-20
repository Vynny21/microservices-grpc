FROM node:11-alpine

WORKDIR /node-app

COPY package.json .

RUN yarn add --quiet

RUN yarn add nodemon -g --quiet

COPY . . 

EXPOSE 9000

CMD nodemon -L --watch . index.js
