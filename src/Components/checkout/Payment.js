import { ChevronLeftIcon, CreditCardIcon, CurrencyRupeeIcon, TruckIcon } from '@heroicons/react/outline'
import  Router  from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useForm from '../../hooks/useForm'
import { clearCart, selectItems, showCart } from '../../slices/cartSlice'
import { checkoutItems, setOrder, setPayment, setStep } from '../../slices/checkoutSlice'
import validatePayment from '../../utils/validatePayment'
import Confetti, { ReactConfetti } from 'react-confetti'

function Payment() {
    const dispatch = useDispatch()
    const [state, setState] = useState(0)
    const [errors, setErrors] = useState({})
    const [submitting, setSubmitting] = useState(false)
    const {handleChange,values}=useForm()
    const cartItems  = useSelector(selectItems)
    const checkout=useSelector(checkoutItems)
    // console.log(checkout.shipping);
    let order
    useEffect(async () => {
        if (submitting && Object.keys(errors).length===0 ) {
            await Router.push('/')    
            dispatch(setPayment({cardno:values.cardno,
                expiryDate:values.exp,
                CVV:values.cvv})) 
                order={cart:cartItems,
                    shipping:checkout.shipping}             
                    dispatch(setOrder(order))
                    dispatch(clearCart())
            dispatch(showCart(false)) 
            // return <Confetti tweenDuration={5000} recycle={false}/>      

        }
    }, [errors])
    // console.log(Object.keys(errors).length,submitting);
    const PaymentStep=async ()=>{
        if (state) {
            setErrors(validatePayment(values))
            setSubmitting(true) 
        }
        else{
            await Router.push('/') 
            dispatch(setPayment('UPI'))
            order={cart:cartItems,
                shipping:checkout.shipping}
            dispatch(setOrder(order))
            dispatch(clearCart())
            dispatch(showCart(false))
            // return <Confetti tweenDuration={5000} recycle={false}/>       
          

        } 
    }
    return (
        <div className=''>
            <div className='text-center font-bold mb-4'>
                <h2>Payment Method</h2>
            </div>
            <div className={`space-y-6 justify-center items-center backdrop-blur-xl py-20${!state && 'cursor-pointer'}`}>
                <div className='' onClick={()=>setState(1)} >
                    <div className={`border group border-blue-900 rounded-lg  px-6 py-4  duration-500  ${state===0  ?'cursor-pointer bg-yellow-200 hover:bg-yellow-500' :'bg-yellow-400 '}`}>
                    <p className='flex text-center'>Creditcard <CreditCardIcon className={`h-6 ml-4 ${!state && "group-hover:scale-125"}`}/></p>
                    </div>
                   
                    {state ?
                    <div className='px-10 space-y-6 py-10'>
                        <div className='flex flex-grow '>
                            <input type='text' className='flex flex-grow border outline-none p-1 border-gray-800 text-gray-700' placeholder='Card Number' 
                            name='cardno'
                            onChange={handleChange}
                            value={values.cardno}/>
                            {errors.cardno && <p className='text-xs p-1 text-red-600'>{errors.cardno}</p>}
                        </div>
                        <div className='flex-col flex-grow space-x-20'>
                            <input type='month' className='outline-none border-gray-800 p-1 w-20 border text-gray-700' placeholder='MM/YY'
                            name='exp'
                            onChange={handleChange}
                            value={values.exp}/>
                            

                            <input type='text' className='w-20 border outline-none border-gray-800 text-gray-700' placeholder='CVV'
                            name='cvv'
                            onChange={handleChange}
                            value={values.cvv}/>
                            

                        </div>
                        {errors.exp && <p className='text-xs text-red-600'>{errors.exp}</p>}
                        {errors.cvv && <p className='text-xs text-red-600'>{errors.cvv}</p>}
                    </div>:null}
                </div>
                <div className={`border group border-blue-900 rounded-lg px-6 py-4 cursor-pointer duration-500 ${!state ? 'bg-yellow-400':'bg-yellow-300 hover:bg-yellow-500' }`} onClick={()=>setState(0)} >
                    <p className='flex text-center'>UPI <CurrencyRupeeIcon className={`h-6 ml-4 ${state && "group-hover:scale-125"}`}/></p>
                </div>
                
            </div>
            
            <div className='w-full sm:space-x-80 flex justify-between pt-10 mb-5'>
                  <button className='ml-4 hover:scale-105 hover:-translate-x-1 duration-300 hover:bg-yellow-100 ease-out' onClick={()=>dispatch(setStep('b'))}> <ChevronLeftIcon height={30}/></button>
                  <button className='px-6 mr-3 group py-2 flex text-center bg-yellow-400 hover:bg-yellow-500 rounded-xl  text-black font-weight:bold' onClick={PaymentStep}> 
                  Place order <TruckIcon className='h-6 ml-3 group-hover:translate-x-2 ease-in-out duration-700'/>
                  </button>
            </div>
        </div>
        
    )
}

export default Payment
