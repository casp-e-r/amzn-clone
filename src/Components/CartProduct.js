import React from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '../slices/cartSlice'
import { MenuAlt1Icon } from '@heroicons/react/outline'

function CartProduct({product}) { 
    const dispatch = useDispatch()
    const removeItemFromCart=()=>{
        dispatch(removeFromCart(product))
    }
    const productQuantityIncrement=()=>{ 
        let count=product.quantity+1
        let updatedProduct={...product, quantity:count}
        console.log(updatedProduct);
        dispatch(updateQuantity(updatedProduct))
    }
    const productQuantityDecrement=()=>{
        if(product.quantity!=1){
            let count=product.quantity-1
            let updatedProduct={...product, quantity:count}
            console.log(updatedProduct);
            dispatch(updateQuantity(updatedProduct))
        }
        
    }
    return (
        <div className='grid grid-cols-5 m-2 mx-3 my-4'>
            <Image width={100} height={120} src={product.image} objectFit='contain'/>
            <div className='text-sm md:text-base col-span-3 mx-5 space-y-2'>
                <p>{product.title}</p>
                <p>{product.category}</p>
                {/* <p className='text-xs my-2 '>{product.description}</p> */}
                <div className='flex space-x-2'>
                <p className='text-sm'>{product.quantity} x {product.price}</p>
                <p>{product.quantity*product.price}</p>
                </div>
            </div>
            <div className='flex flex-col '>
                <div className='flex text-xs justify-center my-2'>
                    <button
                     onClick={productQuantityDecrement} 
                     className={ product.quantity >1 ?'text-white p-1 mx-3  bg-blue-700 ':'text-white p-1 mx-3  bg-blue-900 cursor-not-allowed' }>-</button>
                    <span>{product.quantity}</span>
                    <button
                     onClick={productQuantityIncrement}  
                     className='bg-blue-700 text-white p-1 mx-3 '>+</button>
                </div>
                <button className='text-xs text-white bg-blue-700 ' onClick={removeItemFromCart}>Remove from cart</button>

            </div>

            
        </div>
    )
}

export default CartProduct
