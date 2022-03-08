import { useDispatch, useSelector } from "react-redux"
import { selectItems } from "../src/slices/cartSlice"
import Image from 'next/image';
import Review from "../src/Components/checkout/Review";
import Router from "next/router";
import { useEffect, useState } from "react";
import Shipping from "../src/Components/checkout/Shipping";
import Payment from "../src/Components/checkout/Payment";
import { checkoutStep, setStep } from "../src/slices/checkoutSlice";
import Head from 'next/head'
import { ToastContainer } from "react-toastify";
import { useSession } from "next-auth/client";
import { Zoom } from 'react-toastify';


function checkout() {
    const items = useSelector(selectItems)
    const [state, setstate] = useState(0)
    const step = useSelector(checkoutStep)
    const dispatch = useDispatch()
    const [session] = useSession()
    useEffect(() => {
        !session && Router.push('/')
    }, [session])

    useEffect(() => {
        dispatch(setStep('a'))
    }, [setStep])
    return (
        <>
            <Head>
                <title>Checkout</title>
                <link rel="icon" href="/a.jpeg" />

            </Head>
            <div className='mx-1 md:ml-10 mb-7 '>
                <Image src='/amzn.png' width={100} height={55} objectFit='contain' layout='fixed' onClick={() => Router.push('/')} className='cursor-pointer' />
            </div>
            {session &&
                <div className='flex flex-col justify-center items-center mx-1 animate-fadeIn '>

                    <div className=' mb-10 mx-auto flex space-x-20 md:space-x-48 '>
                        <div className='flex flex-col justify-center items-center'>
                            <div className={`text-xs md:text-base rounded-full md:h-10 md:w-10 flex justify-center bg-yellow-400 items-center  duration-300 ease-in ${step === 'a' ? ' h-7 w-7 bg-opacity-100 ' : ' h-6 w-6 bg-opacity-50 '}`}>1</div>
                            <p className={`py-2 text-xs text-center text-gray-500 duration-150 ${step === 'a' && "text-black text-sm font-medium"}`}>order summary</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className={`text-xs md:text-base rounded-full md:h-10 md:w-10 flex justify-center bg-yellow-400 items-center  duration-300 ease-in ${step === 'b' ? ' h-7 w-7 bg-opacity-100 ' : ' h-6 w-6 bg-opacity-50 '}`}>2</div>
                            <p className={`py-2 text-xs text-center text-gray-500 duration-150 ${step === 'b' && "text-black text-sm font-medium"}`}>shipping details</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className={`text-xs md:text-base rounded-full md:h-10 md:w-10 flex justify-center bg-yellow-400 items-center  duration-300 ease-in ${step === 'c' ? ' h-7 w-7 bg-opacity-100 ' : ' h-6 w-6 bg-opacity-50 '}`}>3</div>
                            <p className={`py-2 text-xs text-center text-gray-500 duration-150 ${step === 'c' && "text-black text-sm font-medium"}`}>payment</p>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2  '>
                        {step === 'a' ? <Review /> : step === 'b' ? <Shipping /> : step === 'c' ? <Payment /> : null}
                    </div>
                    <div className='flex float-right space-x-4 mb-4   '>
                        <label>{state ? 'Total :' : ' subtotal :'}</label>
                        <p>{items.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
                    </div>
                    <div>
                        <button
                            className='px-4 py-2 bg-yellow-400  text-black rounded-full   hover:bg-yellow-500 '
                            onClick={() => Router.push('/')}>Continue Shopping </button>
                    </div>
                    <ToastContainer
                        position="top-center"
                        autoClose={4000}
                        hideProgressBar
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHove
                        transition={Zoom} />
                </div>
            }
        </>
    )
}

export default checkout
