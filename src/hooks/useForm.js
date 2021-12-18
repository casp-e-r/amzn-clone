import React, { useState } from 'react'

const useForm=  ()=>{                                               //(validate)
    const [values, setValues] = useState({
        name:'',
        email:'',
        phone:'',
        address:'',
        pin:'',
        cardno:'',
        cvv:'',
        exp:'',
    })
    const [errors, setErrors] = useState({})
    const handleChange=e=>{
        const {name,value}=e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    // const handleSubmit=e=>{
    //     e.preventDefault()
    //     setErrors(validate(values))
    // }                                                                  not available inside custom function ????!!!!
    
    return{handleChange,values,errors}

}
export default useForm