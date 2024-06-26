import axios from 'axios'
import { Product, User } from '../definitions/definitions'


const URL = process.env.REACT_APP_API
const URL_LOCAL = process.env.REACT_APP_JSON_SERVER

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

export const getAllProductsByJsonServer = async (): Promise<Product[]> => {

    await new Promise(resolve => setTimeout(resolve,2000))
    
    const data = await axios.get<Product[]>(`${URL_LOCAL}/articles`).then(res=>res.data)
    //throw new Error('Error fetching')
    return data
}

export const createNewProd = async (prod: Product): Promise<Product[]> => {
    const { data }  = await axios.post(`${URL_LOCAL}/articles`, prod )
    return data
}

export const getPostById = async (id: number): Promise<Product> => {
    const data = await axios.get<Product>(`${URL_LOCAL}/articles/${id}`).then(res=>res.data)
    console.log(data)
    return data
}

export const updateProdById = async (prod: Product): Promise<Product> => {
    const data = await axios.put<Product>(`${URL_LOCAL}/articles/${prod.id}`, prod).then(res=>res.data)
    console.log(data)
    return data
}