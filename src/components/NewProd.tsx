import  React, {ChangeEvent, FormEvent, useState} from 'react'
import { Product } from '../definitions/definitions'
import {v4} from 'uuid'
import {useMutateProds} from '../hooks/prodsHook'

const initialProd: Product = {
    id:'',
    title:'',
    price:Number(''),
    description:'',
    category:''
}

const NewProd: React.FC = () => {

    const [prod, setProd] = useState(initialProd);
    const {mutate, error, isLoading, isSuccess, reset} = useMutateProds()   

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const newProd = { ...prod, id: v4() };
        mutate(newProd, {
            onSuccess: () => {
                setProd(initialProd)
            }
        })
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target
        setProd((prevProd) => ({
            ...prevProd,
            [id]: id === 'price' ? parseFloat(value) : value
        }))
    }
    
  return (
    
        <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap gap-8 p-10 mt-5 mb-5 bg-slate-700 rounded-xl justify-center">
                <input className='flex-grow flex-shrink-0 basis-36 rounded-xl shadow-white' type="text" id='title' value={prod.title} onChange={handleChange} placeholder="Title"/>              
                <input className='flex-grow flex-shrink-0 basis-32 rounded-xl shadow-white' type="text" id='price' value={prod.price}  onChange={handleChange} placeholder="Price"/>
                <input className='flex-grow flex-shrink-0 basis-32 rounded-xl shadow-white' type="text" id='description' value={prod.description}  onChange={handleChange} placeholder="Description"/>
                <input className='flex-grow flex-shrink-0 basis-28 rounded-xl shadow-white' type="text" id='category' value={prod.category}  onChange={handleChange} placeholder="Category"/>
                <button className='flex-grow flex-shrink-0 basis-20 bg-white p-6' type= 'submit' > Add </button>
            </div>
            <div>
                {isSuccess && <div className='bg-orange-200 text-blue cursor-pointer' onClick={reset}> Success!!   X </div>}
            </div>
        </form>
  )
}

export default NewProd