FROM node:latest
USER root

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
COPY src/ /usr/src/app/src/

RUN cd /usr/src/app

RUN npm rebuild grpc --force

RUN yarn install

COPY . .

EXPOSE 3333

CMD [ "yarn", "dev" ]