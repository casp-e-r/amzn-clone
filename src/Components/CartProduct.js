import React from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { removeFromCart, showCart, updateQuantity } from '../slices/cartSlice'
import { MenuAlt1Icon } from '@heroicons/react/outline'
import  Router  from 'next/router'
import { PlusIcon, MinusIcon, TrashIcon, } from '@heroicons/react/solid'
import { ToastContainer, toast } from 'react-toastify'

;



function CartProduct({product}) { 
    const dispatch = useDispatch()
    const removeItemFromCart=()=>{
        dispatch(removeFromCart(product))
        toast(<div className=" text-red-900 flex justify-center"><TrashIcon  className="text-red-700 mr-5 h-6" />Removed from cart </div>,{style:{borderRadius:'10px'}})

    }
    const productQuantityIncrement=()=>{ 
        if (product.quantity < 5) {
            
        
        let count=product.quantity+1
        let updatedProduct={...product, quantity:count}
        dispatch(updateQuantity(updatedProduct))
        }
    }
    const productQuantityDecrement=()=>{
        if(product.quantity!=1){
            let count=product.quantity-1
            let updatedProduct={...product, quantity:count}
            dispatch(updateQuantity(updatedProduct))
            
        }
        
    }
    return (
        <div className='w-full  flex col-span-5  my-4 gap-x-3 md:gap-x-6'>
            <div className='p-2'>
                <Image width={80} height={80} src={product.image} layout='fixed' objectFit='contain' />
            </div>
            
            <div className='text-sm md:text-base col-span-2 mx-1 space-y-2'>
                <p className='hover:cursor-pointer font-normal' onClick={()=>{Router.push(`/product/${product.id}`),dispatch(showCart(false))}}>{product.title}</p>
                <p className='font-light'>{product.category}</p>
                <div className='flex space-x-2'>
                <p className='text-sm font-light'>{product.quantity} x {product.price} </p>
                <p className='font-medium pl-5'>{product.quantity*product.price}</p>
                </div>
            </div>

            <div className='flex flex-col col-span-2 ml-auto '>
                <div className='flex text-xs justify-center my-2'>

                    <button
                     onClick={productQuantityDecrement} 
                     className={` p-1 py-2 mx-3 border rounded text-blue-700  hover:bg-yellow-300 border-blue-900 transition-all duration-300 ease-in-out ${product.quantity <= 1 && "cursor-not-allowed hover:bg-white bg-white"}`}>
                     <MinusIcon className='h-3'/>
                     </button>
                    <span className=' text-base'>{product.quantity}</span>
                    <button onClick={productQuantityIncrement}  
                     className={` p-1 py-2 mx-3 border rounded text-blue-700  hover:bg-yellow-300 border-blue-900  duration-300 ease-in-out  ${product.quantity === 5 && "cursor-not-allowed hover:bg-white bg-white"}`}>
                     <PlusIcon className='h-3'/></button>
                    
                </div>
                <button className='text-xs text-red-700 border border-red-700 rounded hover:bg-red-700 hover:text-white transition-all duration-300 ease-in-out bg-white flex justify-center py-1 -px-3 ' 
                    onClick={()=>removeItemFromCart()}><TrashIcon className='h-3'/></button>

            </div>
            
            
        </div>
    )
}

export default CartProduct
