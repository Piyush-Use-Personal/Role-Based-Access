import { Router } from 'express';
import Controller from './../controllers/cache.js';
var router = Router();

router.get('/with-cache', Controller.withCache)
router.get('/without-cache', Controller.withoutCache)

export default router;

