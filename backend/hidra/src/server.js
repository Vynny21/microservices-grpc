import path from 'path'
import grpc from 'grpc'
import { protoLoader } from '@grpc/proto-loader'

var packageDefinition = protoLoader.loadSync(path.resolve(__dirname, 'pb'),
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  }
)

const proto = grpc.loadPackageDefinition(packageDefinition)
