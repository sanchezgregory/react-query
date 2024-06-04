import React from 'react'
import { useNavigate } from 'react-router-dom'
import useCustomQuery from '../hooks/useCustomQuery'
import { Product } from '../definitions/definitions'
import { useQuery, useQueryClient } from 'react-query'

import { fetchConfig } from '../utilities/fetchingConfig.ts'


export const Show: React.FC = () => {


    const queryClient = useQueryClient()

   // ReactQuery without use customHook() 
   const {data, error: error, isError, status, isFetching, isLoading, isIdle, refetch} = useQuery(['posts'], fetchConfig.getAllProductsByJsonServer,{ 
        refetchOnWindowFocus: false,
        staleTime: 60 * 1000, // Infinity
        cacheTime: 1000,
        enabled:false
    }
   )
 
    // New way to make data fetching with reactQuery, using a customHook as a Adapter Pattern
    //const { data, isError, error, status, isFetching } = useCustomQuery<Product>('products');
    const navigate = useNavigate()

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    if (status === 'fetching') {
        return <span>fetching data ...</span>
    }

    if (isIdle) {
        // Ideal para consultas dependientes. selects dependientes
        return <button onClick={()=>refetch()}>Refetch</button>
    }


  return (
    <>
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
                    {data && data.length > 0 && data.map(prod => (
                        <tr key={prod.id} className={queryClient.getQueryData(["posts", prod.id]) && "bg-green-400"}>
                            <td>{prod.id}</td>
                            <td>{prod.title}</td>
                            <td>{prod.price}</td>
                            <td>
                                <button onClick={() => navigate(`${prod.id}`)}>
                                    Go details
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
