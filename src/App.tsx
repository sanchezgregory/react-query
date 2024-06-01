import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom"
import { Show } from "./components/Show"
import Details from "./components/Details"
import { TailwincssView } from "./components/TailwincssView"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Show />
  },
  {
    path:"/products/:id",
    element:<Details />
  },
  {
    path:"/tailwind-practice",
    element:<TailwincssView />
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
