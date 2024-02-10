import express from 'express';
import cors from 'cors';
import { dirname, resolve, join } from 'path';
import { fileURLToPath } from 'url';
import router from './auth.routes.js';

const app = express();

app.use(express.json());

app.use(cors());

const port = 9090;

const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(join(__dirname, 'client', 'dist')));

  app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
  });
}

app.use('/auth', router);

app.get('/api/ping', (req, res) => {
  res.statusCode = 200;
  res.send({
    status: 'success',
    message: 'Server is ready'
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
