import { Router } from 'express'

import UserController from '../controllers/UserController'
import SessionController from '../controllers/SessionController'

const routes = Router()

routes.get('/users/:id', UserController.show)
routes.post('/users', UserController.store)
routes.post('/auth', SessionController.store)

export default routes
