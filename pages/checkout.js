import { useDispatch, useSelector } from "react-redux"
import { selectItems } from "../src/slices/cartSlice"
import Image from 'next/image';
import Review from "../src/Components/checkout/Review";
import  Router  from "next/router";
import { useEffect, useState } from "react";
import Shipping from "../src/Components/checkout/Shipping";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import Payment from "../src/Components/checkout/Payment";
import { checkoutItems, checkoutStep, setStep } from "../src/slices/checkoutSlice";

function checkout(){
    const items = useSelector(selectItems)
    const [state, setstate] = useState(0)
    const step = useSelector(checkoutStep)
    const dispatch = useDispatch()
    


    useEffect(() => {
        dispatch(setStep('a'))
    },[setStep])
    return(
        
        <>
        <div className='mx-1 md:ml-10 mb-7'>
                   <Image src='/amzn.png' width={100} height={55} objectFit='contain' layout='fixed' onClick={() => Router.push('/')} className='cursor-pointer' />
        </div>
        <div className='flex flex-col justify-center items-center '> 
                 
            <div className=' mb-10 mx-auto flex space-x-20 md:space-x-48 '> 
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-xs md:text-base rounded-full bg-yellow-400 h-6 w-6 md:h-10 md:w-10 flex justify-center items-center'>1</div>
                    <p className='py-2 text-xs text-gray-500'>order summary</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-xs md:text-base rounded-full bg-yellow-400 h-6 w-6 md:h-10 md:w-10 flex justify-center items-center'>2</div>
                    <p className='py-2 text-xs text-gray-500'>shipping details</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-xs  md:text-base rounded-full bg-yellow-400 h-6 w-6 md:h-10 md:w-10 flex justify-center items-center'>3</div>
                    <p className='py-2 text-xs text-gray-500'>payment</p>
                </div>     
            </div>
            <div className=' md:w-1/2  '>
                {step==='a' ? <Review /> : step==='b' ? <Shipping/> :step==='c'? <Payment/>:null}
            </div>
            <div className='flex float-right space-x-4 mb-4   '>
                <label>{state ? 'Total :': ' subtotal :'}</label>
                <p>{items.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
            </div>
            <div>
                <button
                className='px-4 py-2 bg-yellow-400 text-white rounded-full '  
                onClick={()=>Router.push('/')}>Continue Shopping</button>
            </div>
        </div>
        </>
    )
}

export default checkout
