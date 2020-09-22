import { promissify } from 'util'
import HidraService from '../services/hidra'

class SessionController {

  async store(req, res) {
    const { email, password } = req.body

    const response = await promissify(HidraService.loginUser)({ 
      email, password 
    })

    return res.json(response)
    
  }
}

export default new SessionController()