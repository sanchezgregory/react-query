import { RouterProvider, createBrowserRouter} from "react-router-dom"
import { Show } from "./components/Show"
import Details from "./components/Details"
import { TailwincssView } from "./components/TailwincssView"
import MainPage from "./components/MainPage.tsx"
import UpdateProd from './components/UpdateProd.tsx'

const router = createBrowserRouter([
  {
    element:<MainPage />,
    path:'/',
    children: [
      {
        path:"/products",
        element:<Show />
      },
      {
        path:"/products/:id",
        element:<Details />
      },
      {
        path:"/products/update/:id",
        element:<UpdateProd />
      },
      {
        path:"/tailwind-practice",
        element:<TailwincssView />
      }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}>
        <MainPage />
      </RouterProvider>
    </>
  )
}

export default App
