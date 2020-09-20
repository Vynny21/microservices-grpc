Micro-serviço -> User (credenciais e dados) - gRPC -> API Hidra

Micro-serviço -> Purchases - gRPC (server)

API -> Express (/users, /purchases) - gRPC (Client)


nodemon
{
  "watch": ["src"],
  "ext": "js",
  "execMap": {
    "js": "sucrase-node src/server.js"
  }
}
