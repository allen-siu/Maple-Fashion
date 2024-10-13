import jwt from 'jsonwebtoken';

export const authManager = () => {
    const signToken = (username: string) => {
        const token = jwt.sign(
            { username: username },
            process.env.JWT_SECRET || '' 
        )
        return token
    }


    
}