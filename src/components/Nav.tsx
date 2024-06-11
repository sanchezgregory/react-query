import { Link, NavLink, useNavigate } from 'react-router-dom'

const Nav = () => {
    
    const navigate = useNavigate()

  return (
    <>
        <div className='font-bold text-2xl left-0'>
            React Query 
        </div>
        <div className='flex gap-5 active:bg-slate-50'>
            <NavLink to={'/products'}>Products</NavLink>
            <NavLink to={'/articles'}>Arcticles</NavLink>
            <NavLink to={'/counter'}>Counter (Zustand)</NavLink>
            <NavLink to={'/tailwind-practice'}> Tailwind </NavLink>
        </div>    
    </>
  )
}

export default Nav