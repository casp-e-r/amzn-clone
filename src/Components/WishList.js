import React from 'react'
import { useSelector } from "react-redux"

import WishCard from "./WishCard"
import { selectWishItems } from "../slices/wishSlice"
import {HeartIcon as H1} from '@heroicons/react/outline'

function WishList() {
    const wish = useSelector(selectWishItems)
 console.log(wish)
    return (
        <div className='relative py-10  '>
            
            <div className='flex  '>
            {wish.length===0 ? 
                <div className='w-full text-center m-auto justify-center'>
                    <h1 className=' font-extrabold '>your wishlist is empty</h1>
                    <h2 className='flex items-center'>use <H1 className='h-3 text-red-700 fill-current'/> to wishlist</h2>
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
