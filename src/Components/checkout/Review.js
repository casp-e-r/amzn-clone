import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, selectItems, updateQuantity } from '../../slices/cartSlice'
import Image from 'next/image'
import { PlusIcon, MinusIcon, TrashIcon } from '@heroicons/react/outline'



function Review() {
    const dispatch = useDispatch()
    const cartItems  = useSelector(selectItems)
   
    const removeItemFromCart=(product)=>{
        dispatch(removeFromCart(product))
   }
    const productQuantityIncrement=(product)=>{ 
        let count=product.quantity+1
        let updatedProduct={...product, quantity:count}
        dispatch(updateQuantity(updatedProduct))
    }
    const productQuantityDecrement=(product)=>{
        if(product.quantity!=1){
            let count=product.quantity-1
            let updatedProduct={...product, quantity:count}
            dispatch(updateQuantity(updatedProduct))
        }
    }
    return (
        <div className=' py-6'>
            
            <div className='flex flex-col space-y-2 justify-center items-center' >
                <h1 >Order Summary</h1>
                <p className='text-gray-600 text-xs '>review items </p>

            </div>
                {cartItems.length > 0 && cartItems.map(e=>{
                    return(
                    <div className='justify-center flex  items-center'>
                        <div className='flex flex-col gap-y-3 px-3'>
                            <button className='px-2 py-3 bg-gray-500 text-white rounded-sm ' onClick={()=>productQuantityIncrement(e)}><PlusIcon className='h-3'/></button>
                            <button className='px-2 py-3 bg-gray-500 text-white rounded-sm ' onClick={()=>productQuantityDecrement(e)}><MinusIcon className='h-3'/></button>
                        </div>
                        <div className=' justify-around '>
                        <Image height={60} width={60} layout='fixed' objectFit='contain' src={e.image}/>
                        </div>
                        <div className=' text-sm p-4 max-w-xs flex-grow ' >
                            <h1>{e.title}</h1>
                            <p>{e.category}</p>
                            <p>{e.quantity}</p>
                        </div>
                        <div className='float-right w-14'>
                            <h1>{e.quantity*e.price}</h1>
                        </div>
                        <div className='flex items-center justify-center px-4 space-x-7'>                               
                            <button className='bg-red-500 text-white rounded-2xl  p-2' onClick={()=>removeItemFromCart(e)}>< TrashIcon className='h-4'/></button>
                        </div>
                    </div>)
                })}
              
            
        </div>
    )
}

export default Review
