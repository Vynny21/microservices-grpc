import path from 'path';
import grpc from 'grpc';

// Não funciona com a sintaxe es6
const protoLoader = require('@grpc/proto-loader');

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
const proto = grpc.loadPackageDefinition(packageDefinition);

console.log(proto)
