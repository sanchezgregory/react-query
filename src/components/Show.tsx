import React from 'react'
import { Link } from 'react-router-dom'
import useCustomQuery from '../hooks/useCustomQuery'
import { Product } from '../definitions/definitions';



export const Show: React.FC = () => {


 // New way to make data fetching with reactQuery, using a customHook as a Adapter Pattern
 const { data, isError, error, isFetching } = useCustomQuery<Product>('products');

console.log(data)
 if (isError) {
    return <span>Error: {error.message}</span>
 }

 if (isFetching) {
    return <span>fetching data ...</span>
 }

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data && data.length > 0 && data.map(prod => (
                    <tr key={prod.id}>
                        <td>{prod.id}</td>
                        <td>{prod.title}</td>
                        <td>{prod.price}</td>
                        <td>
                            <Link to={`products/${prod.id}`} > 
                                Ver
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

  )
}
