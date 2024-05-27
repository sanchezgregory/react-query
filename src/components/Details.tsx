import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getById } from '../utilities/api';
import { useQuery } from 'react-query';

interface Product {
  id:number,
  title:string,
  price:number,
  category: string,
  image: string,
  description: string
}

const Details: React.FC = () => {
    const {id} = useParams<{id: string}>();
    const result = useQuery<Product, Error>(['products', id], () => getById(Number(id)))
    const {data, isError, error, status} = result
  
    if (status === 'loading') {
      return <div>Loading...</div>;
    }
  
    if (isError) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
      <div>
        <h1>Details page: ID: {id} <Link to='/'> Home </Link> </h1>
        
        {data && (
          <div>
            <p>Title: {data.title}</p>
            <p>Price: {data.price}</p>
            <p>Category: {data.category}</p>
            <p>Description: {data.description}</p>
            <p>Image: <img src={data.image} alt='asdasdasd'></img></p>
          </div>
        )}
      </div>
    )
}
export default Details