
import Image from 'next/image';
import  Router  from 'next/router';
import React from 'react'
import { useDispatch } from 'react-redux'
import  {addToCart } from '../slices/cartSlice'


function ProductCard({product}) {
    
    const dispatch = useDispatch()
    const addItemToCart = ()=>{
        const cartProduct= {...product,quantity:1}
        //console.log('dd');
        
        //sending to store as action
        dispatch(addToCart(cartProduct))

    }
    return (
        <div className='relative flex flex-col shadow-2xl text-sm md:text-base bg-white m-2 p-8 lg:p-8 lg:m-4'>
            
            <div>
            <p className='absolute text-xs top-2 right-2'>{product.category}</p> 
            <div className='text-center mt-1'>
                <Image src={product.image} width={200} height={200} objectFit='contain' />
            </div>
            <p className='text-sm md:text-base cursor-pointer hover:font-medium hover:underline'
                onClick={()=>Router.push(`/product/${product.id}`)}
                >
                    
                {product.title}</p>
            
            <p className='text-sm md:text-base '>{product.price}</p>
            

            
            </div>
            <button className=' text-sm md:text-base mt-auto flex justify-center cursor-pointer bg-blue-700 hover:bg-transparent hover:bg-blue-900 text-white text-center p-2 rounded'
            onClick={addItemToCart}>
                add     
            </button>
        </div>
    )
}

export default ProductCard
