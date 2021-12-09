import React, { useState } from 'react'

const useForm= ()=>{
    const [values, setValues] = useState({
        name:'',
        email:'',
        phone:'',
        address:''
    })
    const handleChange=e=>{
        const {name,value}=e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    const handleSubmit=e=>{
        e.preventDefault()
    }
    
    return{handleChange,values,handleSubmit}

}
export default useForm