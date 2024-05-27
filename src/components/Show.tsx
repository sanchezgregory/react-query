import React from 'react'
import { getAll } from '../utilities/api'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

interface Product {
    id: number,
    title: string,
    price: number
}

export const Show: React.FC = () => {
 const result = useQuery<Product[], Error>('products', getAll)
    
 const {data, isError, error, isLoading} = result

 if (isError) {
    return <span>Error: {error.message}</span>
 }

 if (isLoading) {
    return <span>Loading ...</span>
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
