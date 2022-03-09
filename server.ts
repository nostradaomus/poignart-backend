import express, { Request, Response, Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';

import ROUTER from './routes/routes';

import { typeDefs } from './schema/typedefs';
import { resolvers } from './schema/resolvers';
import { verifyToken, validateRequest } from './middlewares/auth';

const createServer = (): Application => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      if (!verifyToken(req)) throw Error('Unauthorized');
    }
  });

  server.applyMiddleware({ app });

  // ---------- CREATE ROUTES ----------
  app.use('/create', validateRequest, ROUTER);

  // ---------- ROOT REQUEST ----------
  app.get('/', (_req: Request, res: Response) => res.json('Puck Futin!'));

  return app;
};

export default createServer;
