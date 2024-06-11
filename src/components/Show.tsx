import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useQueryClient } from 'react-query'
import NewProd from './NewProd.tsx'
import { useProducts } from '../hooks/prodsHook.tsx'
//import useCustomQuery from '../hooks/useCustomQuery'


export const Show: React.FC = () => {


    const queryClient = useQueryClient()

   // ReactQuery without use customHook() 
   const {data, error, isError, isFetching, isLoading, isIdle, refetch} = useProducts()
   
 
    // New way to make data fetching with reactQuery, using a customHook as a Adapter Pattern
    //const { data, isError, error, status, isFetching } = useCustomQuery<Product>('products');
    const navigate = useNavigate()

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    if (isFetching) {
        return <span>fetching data ...</span>
    }

    if (isIdle) {
        // Ideal para consultas dependientes. selects dependientes
        return <button onClick={()=>refetch()}>Refetch</button>
    }


  return (
    <>
    <div>
        <h1>Add new product</h1>
        <NewProd />
    </div>
    <div>
        Current status: {isFetching ? 'Fetching' : 'Loaded'}
    </div>
    <div className='grid grid-col-12 gap-2'>
        <div className='col-start-1 col-span-5 bg-blue-600 rounded-md p-10'>
            <table className=''>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 && data.map((prod,i) => (
                        <tr key={prod.id} className={queryClient.getQueryData(["posts", prod.id]) && "bg-green-400"}>
                            <td>{i}</td>
                            <td>{prod.title}</td>
                            <td>{prod.price}</td>
                            <td>
                                <button onClick={() => navigate(`${prod.id}`)}>
                                    See More
                                </button>
                                <button onClick={() => navigate(`/products/update/${prod.id}`)}>
                                    Update
                                </button>
                            
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className='col-start-7 col-span-5 bg-blue-300 rounded-md p-10'>
            <p className='text-3xl font-bold text-center'>Tech used</p>
        </div>
    </div>
    </>
    

  )
}
