import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, selectItems, updateQuantity } from '../../slices/cartSlice'
import Image from 'next/image'
import { PlusIcon, MinusIcon, TrashIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { setStep } from '../../slices/checkoutSlice'
import { toast } from 'react-toastify'



function Review() {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectItems)

    const removeItemFromCart = (product) => {
        dispatch(removeFromCart(product))
        toast(<div className=" text-red-900 flex justify-center"><TrashIcon className="text-red-700 mr-5 h-6" />Removed from cart </div>, { style: { borderRadius: '10px' } })

    }
    const productQuantityIncrement = (product) => {
        let count = product.quantity + 1
        let updatedProduct = { ...product, quantity: count }
        dispatch(updateQuantity(updatedProduct))
    }
    const productQuantityDecrement = (product) => {
        if (product.quantity != 1) {
            let count = product.quantity - 1
            let updatedProduct = { ...product, quantity: count }
            dispatch(updateQuantity(updatedProduct))
        }
    }
    return (
        <div className=' py-6 '>

            <div className='flex flex-col space-y-2 justify-center items-center animate-fadeIn' >
                <h1 >Order Summary</h1>
                <p className='text-gray-600 text-xs '>review items </p>

            </div>
            {cartItems.length > 0 && cartItems.map(e => {
                return (
                    <div className='justify-center flex  items-center'>
                        <div className='flex flex-col gap-y-3 px-3'>
                            <button className='px-3 py-2  text-blue-700 border hover:bg-yellow-300 border-blue-900 rounded-full ease-in-out duration-500  ' onClick={() => productQuantityIncrement(e)}><PlusIcon className='h-3' /></button>
                            <button className='px-3 py-2  text-blue-700 border hover:bg-yellow-300  border-blue-900 rounded-full ease-in-out duration-500 ' onClick={() => productQuantityDecrement(e)}><MinusIcon className='h-3' /></button>
                        </div>
                        <div className=' justify-around '>
                            <Image height={60} width={60} layout='fixed' objectFit='contain' src={e.image} />
                        </div>
                        <div className=' text-sm p-4 max-w-xs flex-grow ' >
                            <h1 className='font-bold'>{e.title}</h1>
                            <p>{e.category}</p>
                            <p className='font-light'>quantity:{e.quantity}</p>
                        </div>
                        <div className='float-right w-14'>
                            <h1>{e.quantity * Math.floor(e.price)} $</h1>
                        </div>
                        <div className='flex items-center justify-center px-4 space-x-7'>
                            <button className='bg-red-500 text-white rounded-2xl  p-2' onClick={() => removeItemFromCart(e)}>< TrashIcon className='h-4' /></button>
                        </div>
                    </div>)
            })}
            <div>
                <div className='w-full sm:space-x-80 flex justify-end pt-10 '>

                    <button
                        className='mr-4 hover:scale-105 hover:translate-x-1 duration-300  hover:bg-yellow-100 ease-out'
                        onClick={() => dispatch(setStep('b'))}> <ChevronRightIcon height={30} /></button>
                </div>
            </div>


        </div>
    )
}

export default Review
