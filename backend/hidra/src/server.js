import path from 'path'
import grpc from 'grpc'
import implementation from './grpc/implementation';

// Não funciona com a sintaxe es6
const protoLoader = require('@grpc/proto-loader');

require('./database')

const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, 'pb', 'messages.proto'),
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
);

const proto = grpc.loadPackageDefinition(packageDefinition)

const server = new grpc.Server();

server.addService(proto.UserService.service, implementation);
server.bind('0.0.0.0:3334', grpc.ServerCredentials.createInsecure());
server.start();