import { Router } from 'express'

import polyanets from './polyanets'
import map from './map'

const router = Router()

router.use('/polyanets', polyanets)
router.use('/map', map)

export default router
