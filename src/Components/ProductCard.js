import { ShoppingBagIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react'


function ProductCard({product}) {
    return (
        <div className='relative flex flex-col shadow-2xlntext-sm md:text-base bg-white m-2 p-5 lg:m-5'>
            
            <div>
            <p className='absolute text-xs top-2 right-2'>{product.category}</p> 
            <div className='text-center mt-1'>
                <Image src={product.image} width={200} height={200} objectFit='contain' />
            </div>
            <p className='text-sm md:text-base'>{product.title}</p>
            
            <p className='text-sm md:text-base '>{product.price}</p>
            

            
            </div>
            <a className=' text-sm md:text-base mt-auto flex justify-center cursor-pointer bg-blue-700 hover:bg-transparent hover:bg-blue-900 text-white text-center p-2 rounded'>
                add     
            </a>
        </div>
    )
}

export default ProductCard
