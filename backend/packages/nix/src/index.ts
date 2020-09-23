import grpc from 'grpc'
import implementation from './grpc/implementation'
import { loadProto } from '@services/protos'

import './database';

const proto = loadProto('nix')
const server = new grpc.Server()

server.addService((proto['PurchaseService'] as any).service, implementation)
server.bind('0.0.0.0:3335', grpc.ServerCredentials.createInsecure())
server.start()
