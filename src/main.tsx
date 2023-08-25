import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClientProvider } from 'react-query'
import { QueryClient } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: { // for customising query's behaviour
    queries: {
      retry: 3,  //default -> try to refetch data from server 3 time if the first fetch fails
      cacheTime: 300_000,  // determines how long the data should be cached before it's considered expired and needs to be refetched (300_000 -> 5mins)
      staleTime: 2 * 1000, //how long the data is considered fresh and will not trigger a refresh
      refetchOnWindowFocus: false, //controls whether the query should automatically refetch when the application window gains focus, false means it will not
      refetchOnReconnect: false,  //specifies whether the query should trigger a refetch when the app reconnects to the network
      refetchOnMount: false //option determines whether the query should be refetched automatically when component is initially mounted.
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      {/* only included in development build */}
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)
