import { Router } from "express";
import { uploadAvatar } from "../controllers/avatarController";

const apiRouter = Router();

apiRouter.post('/', () => {
    console.log('Hello')
})

apiRouter.post('/uploadAvatar', uploadAvatar)


export default apiRouter;