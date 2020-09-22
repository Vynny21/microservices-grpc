import path from 'path'
import grpc from 'grpc'
import implementation from './grpc/implementation'

// Não funciona com a sintaxe es6
const protoLoader = require('@grpc/proto-loader')

//import './database'

const loadConfig = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
}

const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, 'pb', 'messages.proto'),
  loadConfig  
);

const proto = grpc.loadPackageDefinition(packageDefinition)

const server = new grpc.Server();

server.addService(proto.UserService.service, implementation);
server.bind('0.0.0.0:3334', grpc.ServerCredentials.createInsecure());
server.start();