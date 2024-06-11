import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createNewProd } from '../utilities/api';
import { fetchConfig } from '../utilities/fetchingConfig';
import { Product } from '../definitions/definitions';

const key = 'posts'

export function useMutateProds() {

    const queryClient = useQueryClient();

    return useMutation (createNewProd, {
        onSuccess: (newProd) => {
            queryClient.setQueryData([key], prevProds => prevProds.concat(newProd))
            queryClient.invalidateQueries({ queryKey:[key] })
        }
    })

}

export function useProducts() {
    return useQuery([key], fetchConfig.getAllProductsByJsonServer,{ 
        refetchOnWindowFocus: false,
        staleTime: 60 * 1000, // Infinity
        cacheTime: 1000,
        enabled:true // ejecuta el fetch de manera automatica en true, y en false a demanda
    })
}


export function usePost(id: number) {
    return useQuery([key, id], () => fetchConfig.getPostById(id))
}

export function useUpdProd(prod: Product) {
    return useMutation((prod) => 
        fetchConfig.updateProd(prod)
      )
}