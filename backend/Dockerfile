FROM node:latest
USER root

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN cd /usr/src/app/
RUN yarn install


# API
COPY ./packages/api/package.json /usr/app/grpc-api/
COPY ./packages/api/src/ /usr/app/grpc-api/src/
RUN cd /usr/app/grpc-api/; npm rebuild grpc --force
RUN yarn install


# Hidra
COPY ./packages/hidra/package.json /usr/app/grpc-hidra/
COPY ./packages/hidra/src/ /usr/app/grpc-hidra/src/
RUN cd /usr/app/grpc-hidra/; npm rebuild grpc --force
RUN yarn install


# Nix
COPY ./packages/nix/package.json /usr/app/grpc-nix/
COPY ./packages/nix/src/ /usr/app/grpc-nix/src/
RUN cd /usr/app/grpc-nix/; npm rebuild grpc --force
RUN yarn install


# Protos
COPY ./packages/protos/package.json /usr/app/grpc-protos/
COPY ./packages/protos/src/ /usr/app/grpc-protos/src/
RUN cd /usr/app/grpc-protos/; npm rebuild grpc --force
RUN yarn install

RUN npm cache clean --force
RUN npm i -g typescript
RUN yarn install

COPY . .

EXPOSE 9000

CMD [ "yarn", "build:protos"]
CMD [ "yarn", "dev:nix"]
CMD [ "yarn", "dev:hidra"]
CMD [ "yarn", "dev:api"]