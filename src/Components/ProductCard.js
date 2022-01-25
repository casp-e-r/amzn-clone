
import Image from 'next/image';
import  Router  from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  {addToCart } from '../slices/cartSlice'
import {HeartIcon as H1} from '@heroicons/react/outline'
import { addToFav, removeFromFav, selectWishItems } from '../slices/wishSlice';



function ProductCard({product}) {
    const [state, setState] = useState(false)
    const wishItem = useSelector(selectWishItems)
    
    const dispatch = useDispatch()
    useEffect(() => {
        wishItem.map(e=>{
            if(e.id===product.id){
                setState(true)
                console.log(e.title,'......',product.title,state);

            }
            // else{
            //     setState(false)
            // }
        })
    }, [setState,state,wishItem,product])
    // useEffect(() => {
    //     state===1 && dispatch(addToFav(product))
    //     state===0 && dispatch(removeFromFav(product))
    // }, [state,product])
    
    
    const addItemToCart = ()=>{
        const cartProduct= {...product,quantity:1}
        //sending to store as action
        dispatch(addToCart(cartProduct))
    }
//    console.log(wishItem);
    return (
        <div className=' relative rounded-lg flex flex-col shadow-2xl text-sm md:text-base bg-white m-2 p-8 lg:p-8 lg:m-4'>
            
            <div>
            <p className='absolute text-xs top-2 right-2'>{product.category}</p> 
            {/* <div className='absolute top-4 left-4 p-2 rounded-md  bg-yellow-100'
                 onClick={state ? ()=>{dispatch(removeFromFav(product)),setState(0)}:()=>dispatch(addToFav(product))}
                 >
            <H1 
                className={` cursor-pointer h-5 text-red-700  transition ease-in duration-1000 ${state===1 && 'fill-current'}`}
                 onClick={state ? ()=>{dispatch(removeFromFav(product)),setState(0)}:()=>dispatch(addToFav(product))}
                 />
            </div> */}
            <H1 
                className={`absolute hover:scale-105  top-4 left-4 cursor-pointer h-8 p-1 shadow-sm hover:bg-opacity-0 bg-yellow-100 rounded-xl  text-red-700 transition ease-in duration-100 ${state && 'fill-current'}`}
                 onClick={state ? ()=>{dispatch(removeFromFav(product)),setState(0)}:()=>{setState(1),dispatch(addToFav(product))}}/>
            <div className='relative text-center mt-1'>
                
                <Image src={product.image} width={200} height={200} objectFit='contain' />
                
    
            </div>
            <p className='text-sm md:text-base cursor-pointer hover:underline'
                onClick={()=>Router.push(`/product/${product.id}`)}
                >    
                {product.title}</p>
            <p className='text-sm md:text-base '>{product.price}</p>
            
            </div>
            <button className='group text-sm md:text-base mt-auto flex justify-center cursor-pointer bg-blue-700 hover:bg-transparent hover:bg-blue-900 text-white text-center p-2 rounded'
            onClick={addItemToCart}>
            add to     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 text-yellow-400  group-hover:scale-110 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            </button>
        </div>
    )
}

export default ProductCard
