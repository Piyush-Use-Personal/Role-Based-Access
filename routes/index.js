import { Router } from 'express';
import Controller from './../controllers/index.js';
import rateLimiter from './../middlewares/rateLimiter.js';
var router = Router();

// Home page route.
router.get('/video', rateLimiter, Controller.validator, Controller.getVideo)

export default router;

