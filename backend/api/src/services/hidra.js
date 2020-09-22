import grpc from 'grpc'
import protoConfig from '../config/proto'

const path = require('path')

// Não funciona com a sintaxe es6
const protoLoader = require('@grpc/proto-loader')

const hidraDef = protoLoader.loadSync(
  path.resolve(__dirname, '..', 'pb', 'hidra.proto'),
  protoConfig
)

const hidra = grpc.loadPackageDefinition(hidraDef)

const hidraClient = new hidra.UserService(
  'localhost:3334', 
  grpc.credentials.createInsecure()
)

export default hidraClient

