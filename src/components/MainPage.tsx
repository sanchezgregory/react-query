import { Outlet } from 'react-router-dom'
import Nav from './Nav'

const Body = ({children}) => {
  return (
    <div>
        <header className='bg-slate-200 text-black py-5 px-8 flex justify-evenly'>
            <Nav/>
        </header>
        <div className='bg-gray-300 pt-10 px-40 '>
            <Outlet />
        </div>
    </div>
  )
}

export default Body