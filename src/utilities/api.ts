import axios from 'axios'
import { Product, User } from '../definitions/definitions'


const URL = process.env.REACT_APP_API

export const getAllProducts = async (): Promise<Product[]> => {

    const data = await axios.get<Product[]>(`${URL}/products`).then(res=>res.data)
    // throw new Error('Error fetching')
    return data
    
}

export const getAllUsers = async (): Promise<User[]> => {

    const data = await axios.get<User[]>(`${URL}/users`).then(res=>res.data)
    // throw new Error('Error fetching')
    return data
    
}

export const getProductById = async (id: number) => {
    return await (await axios.get(`${URL}/products/${id}`)).data
}