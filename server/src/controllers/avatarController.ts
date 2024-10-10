import { Response, Request } from "express";
import Avatar from "../models/Avatar";

export const uploadAvatar = async (req: Request, res: Response) => {
    const params = req.body;

    const avatar = await Avatar.create(params)
    console.log(avatar)

}

