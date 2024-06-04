import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000, // Infinity
      cacheTime: 5000,
      retry: 2, // reintentos cuando dá error
      retryDelay: 2000 // espera entre retries
    }
  }
})


  
ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
  </QueryClientProvider>
)
