import Image from "next/dist/client/image";
import React, { useEffect, useState } from "react";
import  Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectItems } from "../slices/cartSlice";
function Product({product}) {
    const [state, setState] = useState(0)
    const items = useSelector(selectItems)
    console.log(items);
    console.log(product);
    useEffect(() => {
        items.map(e=>{
            if(e.id===product.id){
                setState(1)
            }
        })
    }, [setState,items,product])
    console.log(state);
    const dispatch = useDispatch()
    const addItemToCart = ()=>{
        const cartProduct= {...product,quantity:1}
        //sending to store as action
        dispatch(addToCart(cartProduct))
    }
    
    return (
        <div>
            <div className=' m-6 space-y-10 lg:mx-7 xl:mx-20 md:flex md:space-x-10' >
                <div className='w-full px-5 justify-center sm:px-40 lg:w-4/5 xl:w-2/5 md:p-2 '>
                    <Image src={product.image} height={100} width={100} layout='responsive'/>
                </div>
                <div className='space-y-2 px-3'>
                    <h1>{product.title}</h1>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    <p>{product.rating.rate}</p>
                    <button 
                    onClick={!state ? addItemToCart : ()=>Router.push('/cart')}
                    className='p-2 px-10 text-white bg-yellow-400'
                    >
                    {!state ? 'add':'go to cart'}</button>
                </div>

            </div>
            
        </div>
    )
}

export default Product
