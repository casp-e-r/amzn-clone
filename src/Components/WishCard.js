import React from 'react'
import { useDispatch } from 'react-redux'
import {  removeFromFav } from '../slices/wishSlice'
import {HeartIcon as H1} from '@heroicons/react/outline'
import Image from 'next/image';
import  Router  from 'next/router';



function WishCard({product}) {
    console.log(product);
    const dispatch = useDispatch()
    
    
    return (
        
            <div className=' relative flex flex-col border text-sm md:text-base bg-white '>
            
            <div>
            
            <div className='relative text-center mt-1'>
                <Image src={product.image} width={100} height={100} objectFit='contain' />
                
                <H1 className='cursor-pointer fill-current text-red-700 h-3' onClick={()=>dispatch(removeFromFav(product))} />

                
            </div>
            <p className='text-sm md:text-base cursor-pointer hover:font-medium hover:underline'
                onClick={()=>Router.push(`/product/${product.id}`)}
                >    
                {product.title}</p>
            <p className='absolute text-xs top-2 right-2'>{product.category}</p> 
            
            
            

            
            </div>
            <button className=' text-sm md:text-base mt-auto flex justify-center cursor-pointer bg-blue-700 hover:bg-blue-900 text-white text-center p-2 rounded'
            >add     
            </button>
        </div>
            
        
    )
}

export default WishCard

