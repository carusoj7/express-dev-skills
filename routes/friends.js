import { Router } from 'express'

import * as friendsCtrl from '../controllers/friends.js'

const router = Router()

// GET localhost:3000/
router.get('/', friendsCtrl.index)


export { router }
