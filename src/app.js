import express from 'express';

import errorHandler from './middlewares/errors';
import routes from './routes';

// Fire up the engines...

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/api', routes);

app.use(errorHandler);

app.listen(4000, () => {
  console.log('Listening on port 4000')
});