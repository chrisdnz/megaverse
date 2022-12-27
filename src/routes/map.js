import { Router } from 'express'

import { createMegaverse } from '../controllers/megaverse'

const router = Router()

router.get('/create', createMegaverse)

export default router
