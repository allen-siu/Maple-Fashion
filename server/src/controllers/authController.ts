import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from 'bcrypt';
import path from "path";
import dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '../.env') })


export const register = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
        const errorMessage = 'Missing required fields.'
        return res.status(400).json({ errorMessage: errorMessage })
    }

    try {
        const existingUser = await User.findOne({ where: { username } })
        if (existingUser) {
            const errorMessage = 'An account with this username already exists.'
            return res.status(409).json({ errorMessage: errorMessage })
        }

        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds)
        const passwordHash = await bcrypt.hash(password, salt)

        const newUser = await User.create({
            username: username,
            password: passwordHash,
            published_avatars: []
        })

        const successMessage = 'Successfully registered account.'
        return res.status(200).json({ successMessage: successMessage })
    }
    catch (error) {
        console.log(error)
        const errorMessage = 'Internal server error when creating account.'
        return res.status(500).json({ errorMessage: errorMessage })
    }
}


export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
        const errorMessage = 'Missing required fields.'
        return res.status(401).json({ errorMessage: errorMessage })
    }

    try {
        const user = await User.findOne({ where: { username }})
        if (!user) {
            const errorMessage = 'Incorrect username or password.'
            return res.status(400).json({ errorMessage: errorMessage })
        }

        const correctPassword = await bcrypt.compare(password, user.password)
        if (!correctPassword) {
            const errorMessage = 'Incorrect username or password.'
            return res.status(400).json({ errorMessage: errorMessage })
        }

        const token = jwt.sign(
            { username: username },
            process.env.JWT_SECRET || '' 
        )
        
        const successMessage = 'Successfully logged in.'
        return res.status(200).json({ 
            successMessage: successMessage, 
            token: token,
            username: user.username
        })
    }
    catch(error) {
        console.log(error)
        const errorMessage = 'Internal server error when logging in.'
        return res.status(500).json({ errorMessage: errorMessage })
    }
}