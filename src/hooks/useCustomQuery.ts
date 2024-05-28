import { useQuery, QueryKey, UseQueryOptions, UseQueryResult } from 'react-query'
import { fetchConfig } from '../utilities/fetchingConfig.ts'
import { ApiData } from '../definitions/definitions.ts';


type FetchKeys = keyof typeof fetchConfig;

export function useCustomQuery<T>(key: FetchKeys, param?: any, options?: UseQueryOptions<ApiData<T>, Error>): UseQueryResult<ApiData<T>, Error> {
    return useQuery<ApiData<T>, Error>(
        [key,param],
        () => fetchConfig[key](param),
        options
    )

}

export default useCustomQuery