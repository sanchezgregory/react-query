import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchConfig } from '../utilities/fetchingConfig';
import { useUpdProd } from '../hooks/prodsHook';

interface Product {
  id:string,
  title:string,
  price:number,
  category: string,
  image: string,
  description: string
}

const UpdateProd: React.FC = () => {

  const {id} = useParams<{id: string}>();

  const [prod, setProd] = useState({})

  const {mutate} =  useUpdProd(prod)

    const handleSubmit: React.FormEventHandler<HTMLFormElement>  = (e) => {
      e.preventDefault()
      mutate(prod)
    }
  
     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
       const {id, value} = e.target
      setProd((prevProd) => ({
        ...prevProd,
        [id]: id === 'price' ? parseFloat(value) : value
      }))
      console.log(prod)
    }

    useEffect(() => {
      async function getProduct() {
        const data = await fetchConfig.getPostById(Number(id))
        setProd(data)
      }
      getProduct()
    }, [])
     
    return (
      <div>
        <h1>UPDATE PROD ID: {id} </h1>
        <div>
          <Link to='/'> Home </Link>
        </div>
        
        {prod && (
          <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="title">Title</label>
              <input type="text" onChange={handleChange} name='title' id='title' defaultValue={prod.title} />
              <label htmlFor="price">Price</label>
              <input type="text" onChange={handleChange} name='price' id='price' defaultValue={prod.price} />
              <label htmlFor="category">Category</label>
              <input type="text" onChange={handleChange} name='category' id= 'category' defaultValue={prod.category} />
              <label htmlFor="description">Description</label>
              <input type="text" onChange={handleChange} name='description' id='description' defaultValue={prod.description} />
              <button type='submit' className='bg-blue-500 p-5 text-white'> Update </button>
              <p>Image: <img src={prod.image} alt='asdasdasd'></img></p>
            </form>
          </div>
        )}
      </div>
    )
}
export default UpdateProd