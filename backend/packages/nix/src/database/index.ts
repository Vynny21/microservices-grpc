import mongoose from 'mongoose'

const {
  DATABASE: database,
  PORT: port
} = process.env

const beforeAddress = database && port ? `${database}:${port}` : ''

mongoose.connect(`mongodb://${beforeAddress}/nix`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Database connected!')
}).then(error => {
  console.log(`Error connect database: ${error}`)
})