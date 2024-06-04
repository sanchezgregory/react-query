import React from 'react'
import { useNavigate } from 'react-router-dom'
import useCustomQuery from '../hooks/useCustomQuery'
import { Product } from '../definitions/definitions'


export const Show: React.FC = () => {

 // New way to make data fetching with reactQuery, using a customHook as a Adapter Pattern
 const { data, isError, error, isFetching } = useCustomQuery<Product>('products');
 const navigate = useNavigate()

 if (isError) {
    return <span>Error: {error.message}</span>
 }

 if (isFetching) {
    return <span>fetching data ...</span>
 }

  return (
    <div>
        <div>
        <button onClick={() => navigate('tailwind-practice')}>
            Go Tailwind Practice
        </button>
        </div>
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
                            <button onClick={() => navigate(`products/${prod.id}`)}>
                                Go details
                            </button>
                           
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

  )
}
