import { Router } from 'express'

import * as friendsCtrl from '../controllers/friends.js'

const router = Router()

// GET localhost:3000/
router.get('/', friendsCtrl.index)

router.get('/new', friendsCtrl.new)

router.get('/:friendId', friendsCtrl.show)

router.post('/', friendsCtrl.create)

router.delete('/:friendId', friendsCtrl.delete)

export { router }
