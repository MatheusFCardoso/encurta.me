import { Router } from 'express';
import UrlController from '../src/controllers/UrlController';
import bodyParser from 'body-parser';

const router: Router = Router();
router.get('/', UrlController.index);
router.post('/', UrlController.store);
router.get('/:id', UrlController.show);

export default router;
