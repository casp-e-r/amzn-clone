
import Image from 'next/image';
import  Router  from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  {addToCart } from '../slices/cartSlice'
import {HeartIcon as H1} from '@heroicons/react/outline'
import { addToFav, removeFromFav, selectWishItems } from '../slices/wishSlice';
import { toast } from 'react-toastify';
import { ShoppingBagIcon } from '@heroicons/react/outline'





function ProductCard({product}) {
    const [state, setState] = useState(false)
    const wishItem = useSelector(selectWishItems)
    
    const dispatch = useDispatch()
    useEffect(() => {
        wishItem.map(e=>{
            if(e.id===product.id){
                setState(true)
            }
        })
    }, [])
    const addFavHandler = ()=>{
        setState(1)
        dispatch(addToFav(product))
    }
    const removeFavHandler = ()=>{
        setState(0)
        dispatch(removeFromFav(product))

    }
    
    
    const addItemToCart =  ()=>{
        const cartProduct= {...product,quantity:1}

         dispatch(addToCart(cartProduct))
        toast(<div className="  text-blue-900 flex justify-center">added to cart <ShoppingBagIcon  className="text-yellow-400  ml-5 h-6" /></div>,{style:{borderRadius:'10px',boxShadow:'500px'}})
    }

    return (
        <div className=' animate-fade relative   rounded-lg flex flex-col justify-between shadow-2xl text-sm md:text-base bg-white m-2 p-8 lg:p-8 lg:m-4'>
            
            <div>
            <p className='absolute text-xs top-2 right-2 font-light'>{product.category}</p> 
            <H1 
                className={`absolute hover:scale-125  top-4 left-4 cursor-pointer h-8 p-1 shadow-sm hover:bg-opacity-0 bg-yellow-100 rounded-xl  text-red-700 transition ease-in duration-100 ${state && 'fill-current'}`}
                onClick={state ? removeFavHandler :addFavHandler}
                />
            <div className='relative text-center mt-1 hover:scale-105 cursor-pointer duration-300'
            onClick={()=>Router.push(`/product/${product.id}`)}>
                
                <Image src={product.image} width={200} height={200} objectFit='contain'  />
                
            </div>
 

            <p className='text-sm md:text-base cursor-pointer  ' 
                onClick={()=>Router.push(`/product/${product.id}`)}>{product.title.slice(0,40)}{product.title.length>40 && '...'}</p>
            <p className='flex  text-sm md:text-base font-bold font-sans  align-bottom '>${Math.floor(product.price)} </p>

           
            
            </div>
            <button className='group relative text-sm md:text-base align-bottom flex justify-center cursor-pointer bg-blue-700 hover:bg-transparent  hover:bg-blue-900 text-white text-center p-2 rounded'
            onClick={addItemToCart}>
            add to     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 text-yellow-400 duration-500  group-hover:scale-110 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            </button>
            
        </div>
    )
}

export default ProductCard
