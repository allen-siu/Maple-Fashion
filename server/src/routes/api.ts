import { Router } from "express";
import { uploadAvatar } from "../controllers/avatarController";

const api = Router();

api.post('/', () => {
    console.log('Hello')
})

api.post('/uploadAvatar', uploadAvatar)


export default api;