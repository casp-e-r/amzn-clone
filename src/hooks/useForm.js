import React, { useState } from 'react'

const useForm=  (validateShipping)=>{
    const [values, setValues] = useState({
        name:'',
        email:'',
        phone:'',
        address:''
    })
    const [errors, setErrors] = useState({})
    const handleChange=e=>{
        const {name,value}=e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    const handleSubmit=e=>{
        e.preventDefault()
        setErrors(validateShipping(values))
    }
    
    return{handleChange,values,handleSubmit,errors}

}
export default useForm