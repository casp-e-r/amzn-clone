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
                dispatch(setShipping(values.name,values.email,values.phone,values.address,values.pin))
            }  
    }, [errors,forwardStep])
    const forwardStep=()=>{
        // handleSubmit   !!!???!!!1
        setErrors(validateShipping(values))
        setSubmitting(true)
        console.log(errors);        
    }  
    console.log(errors);
    console.log(values);
    return (
        <div>
            <div className='text-center font-bold mb-4'>
                <h2>Shipping Details</h2>
            </div>
            <div>
                <div className='flex' >
                    <div className='grid gap-y-4  flex-grow '>
                    
                    <div className='w-full grid flex-grow gap-y-3 '>
                        <label className='text-sm text-gray-600'>Name</label>
                        <input type='text' name='name' value={values.name} 
                            onChange={handleChange}
                            placeholder={checkout.shipping.name}
                            className='border outline-none border-gray-400 ' />
                            {errors.name && <p>{errors.name}</p>}
                    </div>
                    
                    <div className='w-full grid flex-grow gap-y-3'>
                        <label className='text-sm text-gray-600'>Email</label>
                        <input type='email' name='email' value={values.email}
                            onChange={handleChange} 
                            className='border outline-none border-gray-400' />
                    </div>

                    <div className='w-full grid flex-grow gap-y-3'>
                        <label className='text-sm text-gray-600'>Phone</label>
                        <input type='number' name='phone' value={values.phone} 
                            onChange={handleChange}
                            className='border outline-none border-gray-400 ' />
                    </div>

                    <div className='w-full grid flex-grow gap-y-3'>
                        <label className='text-sm text-gray-600'>Address</label>
                        <input type='text' name='address' value={values.address}
                            onChange={handleChange} 
                            className='border outline-none resize-none border-gray-400' />
                    </div> 
                    <div className='w-1/3 grid flex-grow gap-y-3'>
                        <label className='text-sm text-gray-600'>Pincode</label>
                        <input type='text' name='pin' value={values.pin}
                            onChange={handleChange} 
                            className='border outline-none resize-none border-gray-400' />
                    </div> 
                                               
                    </div>                    
                </div>
            </div>
            <div className='w-full space-x-80 flex justify-between pt-10'>
                  <button onClick={()=>dispatch(setStep('a'))}> <ChevronLeftIcon height={30}/></button>
                  <button onClick={forwardStep}> <ChevronRightIcon height={30}/></button>
              </div>
        </div>
    )
}

export default Shipping
