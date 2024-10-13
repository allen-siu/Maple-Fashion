import axios from "axios"
import useSignIn from "react-auth-kit/hooks/useSignIn"

const PROTOCOL = 'http'
const HOST = 'localhost'
const PORT = 8080

export const login = async (username: string,  password: string) => {
    try {
        const reqBody = {
            username: username,
            password: password
        }        

        const response = await axios.post(`${PROTOCOL}://${HOST}:${PORT}/auth/login`, reqBody)
        if (response.status != 200) {
            const errorMessage = response.data.errorMessage
            return errorMessage
        }

        const signIn = useSignIn()
        signIn({
            auth: {
                token: response.data.token,
                type: 'Bearer'
            },
            userState: {
                username: response.data.username
            }
        })

        return response.data.successMessage
    }
    catch (error) {
        console.log(error)
        console.log('Error making api call to login.')
    }
}


export const register = async (username: string, password: string) => {
    try {
        const reqBody = {
            username: username,
            password: password
        }

        const response = await axios.post(`${PROTOCOL}://${HOST}:${PORT}/auth/register`, reqBody)
        if (response.status != 200) {
            const errorMessage = response.data.errorMessage
            return errorMessage
        }

        const successMessage = response.data.successMessage
        return successMessage
    }
    catch (error) {
        console.log(error)
        console.log('Error making api call to register.')
    }
}