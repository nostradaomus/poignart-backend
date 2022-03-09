import mongoose, { ConnectOptions } from 'mongoose';
import createServer from './server';

import { CONFIG } from './config';

mongoose
  .connect(CONFIG.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as ConnectOptions)
  .then(() => {
    const app = createServer();
    app.listen(CONFIG.PORT, () =>
      console.log(`Listening on port ${CONFIG.PORT}`)
    );
  })
  .catch((err: any) => console.log(err));
