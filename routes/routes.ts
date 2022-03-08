import express, { Request, Response } from 'express';

const pinata = require('./utils/pinata.js');
const multer = require('multer');
const upload = multer({ dest: 'contracts/uploads/' });

// Controllers
import { createComment } from '../controllers/comment';

const ROUTES = express.Router();

ROUTES.get('creator/mint', upload.single('image'), function (req, res, next) {
  // @ts-ignore
  pinata.uploadToPinataAndCallContract(req.body['address'], req.file.filename)
  res.send('success');
});

ROUTES.post('creator/verify', (req, res) => {
  res.send('verify')
});

ROUTES.post('/member', async (req: Request, res: Response) => {
  try {
    const response = await createMember(req.body);
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

ROUTES.post('/raid', async (req: Request, res: Response) => {
  try {
    const response = await createRaid(req.body);
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

ROUTES.post('/portfolio', async (req: Request, res: Response) => {
  try {
    const response = await createPortfolio(req.body);
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

ROUTES.post('/raidparty', async (req: Request, res: Response) => {
  try {
    const response = await createRaidParty(req.body);
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

ROUTES.post('/comment', async (req: Request, res: Response) => {
  try {
    const response = await createComment(req.body);
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default ROUTES;
