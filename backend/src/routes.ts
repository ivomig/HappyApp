import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './configs/upload';

import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const uploadHandler = multer(uploadConfig);

routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages", uploadHandler.array('images'), OrphanagesController.create);

export default routes;