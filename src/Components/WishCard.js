import React from 'react'
import { useDispatch } from 'react-redux'
import {  removeFromFav } from '../slices/wishSlice'
import {HeartIcon as H1} from '@heroicons/react/outline'
import Image from 'next/image';
import  Router  from 'next/router';
import { toast } from 'react-toastify';



function WishCard({product}) {
    const dispatch = useDispatch()
    
    
    return (
        
            <div className=' relative shadow-2xl flex flex-col  text-sm md:text-base p-2 bg-white '>
            
            <div className="py-4">
            
            <div className='relative text-center mt-1 py-2'>
                <Image src={product.image} width={100} height={100} objectFit='contain' />
                
                <H1 className='cursor-pointer fill-current text-red-700 h-3' onClick={()=>{dispatch(removeFromFav(product)),toast.error('removed from favourites')}} />
                
            </div>
            <p className='text-sm md:text-base cursor-pointer  hover:underline py-1'
                onClick={()=>Router.push(`/product/${product.id}`)}
                >    
                {product.title}</p>
            <p className='absolute text-xs  top-1 right-1 '>{product.category}</p> 
            
            </div>
            <button className=' my-3 text-sm md:text-base mt-auto flex justify-center cursor-pointer bg-blue-700 hover:bg-blue-900 text-white text-center p-2 rounded'
            >add to cart    
            </button>
            
        </div>
            
        
    )
}

export default WishCard

