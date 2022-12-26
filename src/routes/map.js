import { Router } from 'express'

import { createMegaverse } from '../controllers/megaverse'

const router = Router()

router.post('/create', createMegaverse)

export default router
