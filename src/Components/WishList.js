import React from 'react'
import { useSelector } from "react-redux"

import WishCard from "./WishCard"
import { selectWishItems } from "../slices/wishSlice"
import { ExclamationCircleIcon } from '@heroicons/react/outline'


function WishList() {
    const wish = useSelector(selectWishItems)
 console.log(wish)
    return (
        <div className='relative py-10 animate-fade  '>
            
            <div className='flex  '>
            {wish.length===0 ? 
                <div className='w-full  mx-20 content-center justify-center'>
                    <h1 className=' font-extrabold flex text-center '><ExclamationCircleIcon className='h-5 mr-3'/>Your wishlist is empty!!</h1>
                    <p className='text-gray-600 py-1 font-light'> start saving your favourite items now!</p>
                    
                </div>
                :
                <div>
                <h1>your wishlist</h1>
                    <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>

                    {wish.map(e=>{
                        return(<WishCard product={e}/>)
                    })}
                    </div>
                </div>
            }
                
            
            </div>

            
        </div>
    )
}

export default WishList
