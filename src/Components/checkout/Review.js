import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectItems } from '../../slices/cartSlice'
import Image from 'next/image'



function Review() {
   const dispatch = useDispatch()
   const cartItems  = useSelector(selectItems)
    return (
        <div className=' w-screen py-10'>
            
            <div className='flex flex-col space-y-2 justify-center items-center' >
                <h1>Order Summary</h1>
                <p>review items </p>

            </div>
                {cartItems.length > 0 && cartItems.map(e=>{
                    return(
                    <div className='flex justify-center items-center'>
                        <div className=' justify-around '>
                        <Image height={100} width={100} layout='fixed' objectFit='contain' src={e.image}/>
                        </div>
                        <div className=' text-sm p-4 max-w-xs ' >
                            <h1>{e.title}</h1>
                            <p>{e.category}</p>
                            <p>{e.quantity}</p>
                        </div>
                        <div className=''>
                            <h1>{e.quantity*e.price}</h1>
                        </div>
                    </div>)
                })}
              
            
        </div>
    )
}

export default Review
