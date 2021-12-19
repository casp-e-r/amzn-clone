import { ChevronLeftIcon } from '@heroicons/react/outline'
import  Router  from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useForm from '../../hooks/useForm'
import { selectItems } from '../../slices/cartSlice'
import { setOrder, setPayment, setStep } from '../../slices/checkoutSlice'
import validatePayment from '../../utils/validatePayment'

function Payment() {
    const dispatch = useDispatch()
    const [state, setState] = useState(0)
    const [errors, setErrors] = useState({})
    const [submitting, setSubmitting] = useState(false)
    const {handleChange,values}=useForm()
    const cartItems  = useSelector(selectItems)
    useEffect(() => {
        if (submitting && Object.keys(errors).length===0 ) {
            dispatch(setPayment(values.cardno,values.exp,values.cvv))
            dispatch(setOrder(cartItems))
            Router.push('/')             
        }
    }, [errors])
    console.log(Object.keys(errors).length,submitting);
    const PaymentStep=()=>{
        if (state) {
            setErrors(validatePayment(values))
            setSubmitting(true) 
        }
        else{
            dispatch(setPayment('UPI'))
            dispatch(setOrder(cartItems))
            Router.push('/') 
        } 
    }
    return (
        <div className=''>
            <div className='text-center font-bold mb-4'>
                <h2>Payment Method</h2>
            </div>
            <div className='space-y-6 justify-center items-center backdrop-blur-xl py-20'>
                <div className='border rounded  ' onClick={()=>setState(1)} >
                    <div className='bg-yellow-100 px-6 py-4'>
                    <p>Creditcard</p>

                    </div>
                   
                    {state ?
                    <div className='px-10 space-y-6 py-10'>
                        <div className='flex flex-grow '>
                            <input type='text' className='flex flex-grow border text-gray-700' placeholder='Card Number' 
                            name='cardno'
                            onChange={handleChange}
                            value={values.cardno}/>
                            {errors.cardno && <p>{errors.cardno}</p>}
                        </div>
                        <div className='flex-col flex-grow space-x-20'>
                            <input type='month' className=' w-20 border text-gray-700' placeholder='MM/YY'
                            name='exp'
                            onChange={handleChange}
                            value={values.exp}/>
                            

                            <input type='text' className='w-20 border text-gray-700' placeholder='CVV'
                            name='cvv'
                            onChange={handleChange}
                            value={values.cvv}/>
                            

                        </div>
                        {errors.exp && <p>{errors.exp}</p>}
                        {errors.cvv && <p>{errors.cvv}</p>}
                    </div>:null}
                </div>
                <div className={!state ? 'border rounded px-6 py-4 bg-yellow-100':'  border rounded px-6 py-4'} onClick={()=>setState(0)} >
                    <p>UPI</p>
                </div>
                
            </div>
            <div className='w-full space-x-80 flex justify-between pt-10'>
                  <button onClick={()=>dispatch(setStep('b'))}> <ChevronLeftIcon height={30}/></button>
                  <button className='px-5 py-1 bg-black text-red-50' onClick={PaymentStep}> confirm</button>
            </div>
        </div>
        
    )
}

export default Payment
