import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useCustomQuery from '../hooks/useCustomQuery';

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
    const { data, isError, error, status } = useCustomQuery<Product>('product', id,{retry:2});
  
    if (status === 'loading') {
      return <div>Loading...</div>;
    }
  
    if (isError) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
      <div>
        <h1>Details page: ID: {id} </h1>
        <div>
          <Link to='/'> Home </Link>
        </div>
        
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