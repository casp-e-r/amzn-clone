import Image from "next/dist/client/image";
import React, { useEffect, useState } from "react";
import  Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {HeartIcon as H1, ShoppingBagIcon} from '@heroicons/react/outline'

import { addToCart, selectItems, showCart } from "../slices/cartSlice";
import {addToFav, removeFromFav, selectWishItems} from '../slices/wishSlice'
import { toast } from "react-toastify";
function Product({product}) {
    const [wishstate, setWishstate] = useState(0)
    
    const dispatch = useDispatch()
    const wishItem = useSelector(selectWishItems)
    const addItemToCart = ()=>{
        const cartProduct= {...product,quantity:1}
        dispatch(addToCart(cartProduct))
        toast(<div className=" text-blue-900 flex justify-center">added to cart <ShoppingBagIcon  className="text-blue-700 ml-5 h-6" /></div>,{style:{borderRadius:'10px',boxShadow:'500px'}})

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
            <div className=' m-6 space-y-10 lg:mx-7 xl:mx-20 md:flex md:space-x-10 ' >
                <div className='w-full p-9 relative  items-center sm:p-20  lg:w-4/5 xl:w-2/5 md:p-2 md:py-12  '>
                    <Image src={product.image} height={'100%'} width={'100%'} layout='responsive' objectFit='contain'  className=' '/>
                <H1 
                className={`absolute hover:scale-125 lg:hover:scale-150  top-3 right-4 cursor-pointer h-10 p-2 shadow-sm hover:shadow-none hover:bg-opacity-0 bg-yellow-100 rounded-xl  text-red-700 transition ease-in duration-100 ${wishstate && 'fill-current'}`}
                 onClick={()=>setWishstate(!wishstate)}/>
                </div>

                <div className='w-full md:w-2/4space-y-2 px-3 md:pl-7'>
                    <h1 className=" font-extrabold text-lg py-2" >{product.title}</h1>
                    <p className=" font-medium">${Math.floor(product.price)}</p>
                    <p className=" text-lg font-light py-2 " >{product.category}</p>
                    <p className=" font-normal">{product.description}</p>
                    <p>{product.rating.rate}</p>
                    <button 
                    onClick={addItemToCart }
                    className={`p-2 px-10 mt-12 md:mt-16 rounded-xl transition-all ease-in-out duration-500 text-black bg-yellow-400 hover:bg-yellow-500 `}
                    >
                    add to cart</button>

                </div>

            </div>
            
        </div>
    )
}

export default Product
