import { Router } from 'express';
import Controller from '../controllers/flippingCoins.js';
var router = Router();

router.post('/blockchain', Controller.validateNewChain, Controller.createNewChain)

router.get('/blockchain/', Controller.getChain)

router.post('/blockchain/append', Controller.appendNewChild)

export default router;

