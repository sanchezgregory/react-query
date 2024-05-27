import axios from 'axios'

const URL = process.env.REACT_APP_API

export const getAll = async () => {

    const data = await axios.get(`${URL}/products`).then(res=>res.data)
    console.log(data)
    return data
    
}


export const getById = async (id: number) => {
    return await (await axios.get(`${URL}/products/${id}`)).data
}