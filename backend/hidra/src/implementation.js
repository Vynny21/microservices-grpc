export default {
  
  getUsersById(call, callback) {
    const { id } = call.request;

    // Consultar o banco de dados e retornar
  },

  registerUser(call, callback) {
    const { username, email, password  } = call.request;

    // Verificar se o usuário já existe 

    // Registrar no banco de retornar o usuário com um id

  },

  loginUser(call, callback) {
    const { email, password } = call.request;

    // Consultar o banco e retornar credenciais e retornar um token ou erro

  }
}