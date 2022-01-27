import React from 'react'
import { useDispatch } from 'react-redux'
import {  removeFromFav } from '../slices/wishSlice'
import {ExclamationIcon, HeartIcon as H1, ShoppingBagIcon} from '@heroicons/react/outline'
import Image from 'next/image';
import  Router  from 'next/router';
import { toast } from 'react-toastify';
import { addToCart } from '../slices/cartSlice';



function WishCard({product}) {
   
    const dispatch = useDispatch()
    const addItemToCart = ()=>{
        const cartProduct= {...product,quantity:1}
        dispatch(addToCart(cartProduct))
        toast(<div className=" text-blue-900 flex justify-center">added to cart <ShoppingBagIcon  className="text-blue-700 ml-5 h-6" /></div>,{style:{borderRadius:'10px',boxShadow:'500px'}})
    }
     
    return (
        
            <div className=' relative shadow-2xl flex flex-col p-5 text-sm md:text-base rounded-md bg-white '>
            
            <div className="py-4">
            
            <div className='relative text-center mt-1 py-2'>
                <Image src={product.image} width={100} height={100} objectFit='contain' />
                
            </div>
            <p className='text-sm md:text-base cursor-pointer py-1 h-14  hover:font-medium  '
                onClick={()=>Router.push(`/product/${product.id}`)}>{product.title}</p>
            <p>{product.price}</p>
            {/* <p className='absolute text-xs  top-1 right-1 '>{product.category}</p>  */}
            
            </div>
            <div className='w-full content-center'>
                
            <button 
            onClick={addItemToCart}
            className='my-1 w-full text-sm md:text-base mt-auto flex justify-center cursor-pointer text-white text-center p-2 transition-all ease-in-out duration-200 rounded  bg-blue-700 hover:bg-blue-900'
            >add to cart    <ShoppingBagIcon className='h-5 pl-3'/>
            </button>
            <button 
            onClick={()=>{dispatch(removeFromFav(product)),  toast(<div className="  text-red-900 flex justify-center"><ExclamationIcon className="text-red-700  mr-5 h-6" />Removed from Wishlist </div>,{style:{borderRadius:'10px'}})}}
            className='w-full text-sm md:text-base mt-auto flex justify-center cursor-pointer bg-red-700 hover:bg-red-900 text-white text-center p-2 rounded'
            >Remove from wishlist    
            </button>
            </div>
            
        </div>
            
        
    )
}

export default WishCard

