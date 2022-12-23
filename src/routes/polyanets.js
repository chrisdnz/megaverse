import { Router } from 'express';

import { createXPolyanets, resetPolyanets } from '../controllers/polyanets';

const router = Router();

router.get('/createX', createXPolyanets);
router.delete('/reset', resetPolyanets);

export default router;