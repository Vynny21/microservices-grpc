import mongoose from 'mongoose'

// Iniciar conexão com o banco de dados
mongoose
  .connect('mongodb://db-hidra/hidra',  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(result => {
    console.log('MongoDB Connected')
  })
  .catch(error => {
    console.log(error)
  })