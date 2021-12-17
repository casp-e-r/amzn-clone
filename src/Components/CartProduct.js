import React from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { removeFromCart, showCart, updateQuantity } from '../slices/cartSlice'
import { MenuAlt1Icon } from '@heroicons/react/outline'
import  Router  from 'next/router'
import { PlusIcon, MinusIcon, TrashIcon, } from '@heroicons/react/solid'


function CartProduct({product}) { 
    const dispatch = useDispatch()
    const removeItemFromCart=()=>{
        dispatch(removeFromCart(product))
    }
    const productQuantityIncrement=()=>{ 
        let count=product.quantity+1
        let updatedProduct={...product, quantity:count}
        dispatch(updateQuantity(updatedProduct))
    }
    const productQuantityDecrement=()=>{
        if(product.quantity!=1){
            let count=product.quantity-1
            let updatedProduct={...product, quantity:count}
            dispatch(updateQuantity(updatedProduct))
        }
        
    }
    return (
        <div className='w-full  flex col-span-5 m-2 mx-3 my-4 gap-x-6'>
            <div className='mx-4 p-2'>
                <Image width={80} height={80} src={product.image} layout='fixed' objectFit='contain' />
            </div>
            
            <div className='text-sm md:text-base col-span-2 mx-1 space-y-2'>
                <p className='hover:cursor-pointer border-b' onClick={()=>{Router.push(`/product/${product.id}`),dispatch(showCart(false))}}>{product.title}</p>
                <p>{product.category}</p>
                {/* <p className='text-xs my-2 '>{product.description}</p> */}
                <div className='flex space-x-2'>
                <p className='text-sm'>{product.quantity} x {product.price}</p>
                <p>{product.quantity*product.price}</p>
                </div>
            </div>

            <div className='flex flex-col col-span-2 '>
                <div className='flex text-xs justify-center my-2'>
                    <button
                     onClick={productQuantityDecrement} 
                     className={ product.quantity >1 ?'text-white p-1 mx-3  bg-blue-700 ':'text-white p-1 mx-3  bg-blue-900 cursor-not-allowed' }>-</button>
                    <span>{product.quantity}</span>
                    <button
                     onClick={productQuantityIncrement}  
                     className={ product.quantity < 5  ?'text-white p-1 mx-3  bg-blue-700 ':'text-white p-1 mx-3  bg-blue-900 cursor-not-allowed' }>+</button>
                </div>
                <button className='text-xs text-white bg-blue-700 text center ' onClick={removeItemFromCart}><TrashIcon className='h-3'/></button>

            </div>

            
        </div>
    )
}

export default CartProduct
