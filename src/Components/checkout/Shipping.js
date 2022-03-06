import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../hooks/useForm'
import { checkoutItems, setShipping, setStep } from '../../slices/checkoutSlice';
import validateShipping from '../../utils/validateShipping';

function Shipping() {
    const {handleChange,values}=useForm()
    const [errors, setErrors] = useState({})
    const [submitting, setSubmitting] = useState(false)
    const dispatch = useDispatch()
    const checkout  = useSelector(checkoutItems)
    useEffect(() => {

        
        if (submitting && Object.keys(errors).length===0) {
                dispatch(setStep('c')),
                dispatch(setShipping({name:values.name,
                    email:values.email,
                    phone:values.phone,
                    address:values.address,
                    pin:values.pin}))
            }  
    }, [errors,forwardStep])
    const forwardStep=()=>{
        // handleSubmit   !!!???!!!1
        setErrors(validateShipping(values))
        setSubmitting(true)
        // console.log(errors);        
    }  
    const handleDummy=()=>{
        dispatch(setShipping({name:'example',
            email:'example@example.com',
            phone:9876543210,
            address:'example address',
            pin:11111}))
        dispatch(setStep('c'))
    
    }
    return (
        <div>
            <div className='text-center font-bold mb-4 animate-fadeIn'>
                <h2>Shipping Details</h2>
            </div>
            <div className='px-5 sm:p-0 '>
                <div className='flex' >
                    <div className='grid gap-y-4  flex-grow '>
                    
                    <div className='w-full grid flex-grow gap-y-3 '>
                        <label className='text-sm text-gray-600'>Name</label>
                        <input type='text' name='name' value={values.name} 
                            onChange={handleChange}
                            className='border outline-none border-gray-600 ' />
                            {errors.name && <p className='animate-fadeIn  text-xs text-red-600'>{errors.name}</p>}
                    </div>
                    
                    <div className='w-full grid flex-grow gap-y-3'>
                        <label className='text-sm text-gray-600'>Email</label>
                        <input type='email' name='email' value={values.email}
                            onChange={handleChange} 
                            className='border  outline-none border-gray-600' />
                            {errors.email && <p className='animate-fadeIn  text-xs text-red-600'>{errors.email}</p>}

                    </div>

                    <div className='w-full grid flex-grow gap-y-3'>
                        <label className='text-sm text-gray-600'>Phone</label>
                        <input type='text' name='phone' value={values.phone} 
                            onChange={handleChange}
                            className='border outline-none border-gray-700 ' />
                            {errors.phone && <p className='animate-fadeIn duration-500 ease-in-out text-xs text-red-600'>{errors.phone}</p>}

                    </div>

                    <div className='w-full grid flex-grow gap-y-3'>
                        <label className='text-sm text-gray-600'>Address</label>
                        <input type='text' name='address' value={values.address}
                            onChange={handleChange} 
                            className='border outline-none resize-none border-gray-600' />
                            {errors.address && <p className='animate-fadeIn  text-xs text-red-600'>{errors.address}</p>}

                    </div> 
                    <div className='w-1/3 grid flex-grow gap-y-3'>
                        <label className='text-sm text-gray-600'>Pincode</label>
                        <input type='text' name='pin' value={values.pin}
                            onChange={handleChange} 
                            className='border outline-none resize-none border-gray-600' />
                            {errors.pin && <p className='text-xs animate-fadeIn text-red-600'>{errors.pin}</p>}

                    </div> 
                                               
                    </div>                    
                </div>
            </div>
            <div className='py-2 text-center'>
                <button className='px-5 py-1 bg-gray-400 rounded-full' 
                onClick={handleDummy}>Dummy Details</button>
            </div>
            <div className=' min-w-min w-full sm:space-x-80 flex justify-between pt-10  sm:px-0'>
                  <button
                  className='ml-4 hover:scale-105 hover:-translate-x-1 duration-300 hover:bg-yellow-100 ease-out' 
                  onClick={()=>dispatch(setStep('a'))}> <ChevronLeftIcon height={30}/></button>
                  <button 
                  className=' mr-4 hover:scale-105 hover:translate-x-1 duration-300 hover:bg-yellow-100 ease-out' 
                  onClick={forwardStep}> <ChevronRightIcon height={30}/></button>
              </div>
        </div>
    )
}

export default Shipping
