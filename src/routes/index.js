import { Router } from 'express';

import polyanets from './polyanets';

const router = Router();

router.use('/polyanets', polyanets);

export default router;