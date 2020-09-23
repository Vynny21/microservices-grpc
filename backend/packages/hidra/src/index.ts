import grpc from 'grpc'
import implementation from './grpc/implementation.js'
import { loadProto } from '@services/protos'

import './database'

const proto = loadProto('hidra')
const server = new grpc.Server()

server.addService((proto['UserService'] as any).service, implementation)

server.bind('0.0.0.0:3334', grpc.ServerCredentials.createInsecure())
server.start()