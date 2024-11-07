import { Router } from 'express';

import * as HomeController from '../controllers/homeController';





const router = Router();


//router.post('/novousuario',UserController.novoUsuario)
router.get('/', HomeController.home);
router.post('/novousuario',HomeController.novoUsuario)




export default router;