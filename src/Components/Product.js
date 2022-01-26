import Image from "next/dist/client/image";
import React, { useEffect, useState } from "react";
import  Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {HeartIcon as H1} from '@heroicons/react/outline'

import { addToCart, selectItems, showCart } from "../slices/cartSlice";
import {addToFav, removeFromFav, selectWishItems} from '../slices/wishSlice'
import { toast } from "react-toastify";
function Product({product}) {
    const [state, setState] = useState(0)
    const [wishstate, setWishstate] = useState(0)
    const items = useSelector(selectItems)
    useEffect(() => {
        items.map(e=>{
            if(e.id===product.id){
                setState(1)
            }else{
                setState(0)
            }
        })
    }, [setState,items,product,state])
    console.log(state);
    const dispatch = useDispatch()
    const wishItem = useSelector(selectWishItems)
    const addItemToCart = ()=>{
        const cartProduct= {...product,quantity:1}
        //sending to store as action
        dispatch(addToCart(cartProduct))
        toast('added to cart')
    }
    useEffect(() => {
        wishItem.map(e=>{
            if(e.id===product.id){
                setWishstate(1)
            }
        })
    }, [])
    useEffect(() => {
        wishstate && dispatch(addToFav(product))
        !wishstate && dispatch(removeFromFav(product))
    }, [wishstate])
    return (
        <div>
            <div className=' m-6 space-y-10 lg:mx-7 xl:mx-20 md:flex md:space-x-10' >
                <div className='w-full p-9 relative  items-center sm:p-20  lg:w-4/5 xl:w-2/5 md:p-2 md:py-12  '>
                    <Image src={product.image} height={'100%'} width={'100%'} layout='responsive' objectFit='contain'  className=' '/>
                <H1 
                className={`absolute hover:scale-105  top-3 right-4 cursor-pointer h-10 p-2 shadow-sm hover:bg-opacity-0 bg-yellow-100 rounded-xl  text-red-700 transition ease-in duration-100 ${wishstate && 'fill-current'}`}
                 onClick={()=>setWishstate(!wishstate)}/>
                </div>

                <div className='w-full md:w-2/4space-y-2 px-3 md:pl-7'>
                    <h1 >{product.title}</h1>
                    <p>{product.price}</p>
                    <p>{product.category}</p>
                    <p>{product.description}</p>
                    <p>{product.rating.rate}</p>
                    <button 
                    onClick={!state ? addItemToCart : ()=>dispatch(showCart(true))}
                    className={`p-2 px-10  rounded-xl ${state? 'text-white bg-black':'text-black bg-yellow-400'}`}

                    >
                    {!state ? 'add':'go to cart'}</button>

                </div>

            </div>
            
        </div>
    )
}

export default Product
