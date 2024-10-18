import axios, { AxiosError } from "axios"

const PROTOCOL = 'http'
const HOST = 'localhost'
const PORT = 8080

export const login = async (username: string,  password: string) => {
    const returnData = {
        status: 500,
        token: '',
        username: '',
        message: ''
    }

    try {
        const reqBody = {
            username: username,
            password: password
        }        

        const response = await axios.post(`${PROTOCOL}://${HOST}:${PORT}/auth/login`, reqBody)
        if (response.status != 200) {
            returnData.status = response.status
            returnData.message = response.data.errorMessage
            return returnData
        }

        returnData.status = response.status,
        returnData.token = response.data.token,
        returnData.username = response.data.username,
        returnData.message = response.data.successMessage

        return returnData
    }
    catch (error) {
        console.log(error)
        console.log('Error making api call to login.')
        returnData.message = 'Error making api call to login.'
        return returnData
    }
}


export const register = async (username: string, password: string, confirmPassword: string) => {
    const returnData = {
        status: 0,
        message: ''
    }
    const reqBody = {
        username: username,
        password: password,
        confirmPassword: confirmPassword
    }

    try {
        const response = await axios.post(`${PROTOCOL}://${HOST}:${PORT}/auth/register`, reqBody)
        
        returnData.status = response.status
        returnData.message =  response.data.successMessage
        return returnData
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                returnData.status = error.response.status
                returnData.message = error.response.data.errorMessage
            }
            else {
                console.log(error)
                console.log('Error making api call to register.')
        
                returnData.status = 500
                returnData.message = 'There was an error attempting to register.'
            }
        }

        return returnData
    }
}