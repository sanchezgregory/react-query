import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Show } from "./components/Show"
import Details from "./components/Details"


const router = createBrowserRouter([
  {
    path:"/",
    element:<Show />
  },
  {
    path:"/products/:id",
    element:<Details />
  }
])


function App() {

  return (
    <>
      <h1 className="text-3xl font-bold text-center"> React query </h1>
      <RouterProvider router={router} />
    </>
  )
}

export default App
