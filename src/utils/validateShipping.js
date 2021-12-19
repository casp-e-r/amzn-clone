export default function validateShipping(values){
    let errors={};
    
    if (!values.name.trim()) {
        errors.name= 'name required'
    }
    if (!values.email) {
        errors.email='Email Required'
    }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        errors.email='Email address is invalid' 
    }

    if (!values.phone) {
        errors.phone='Phone number required'
    }else if(/^\d+$/.test(errors.phone)){
        errors.phone='valid phone number required'
    }else if (values.phone.length < 10) {
        errors.phone='10 digit phone number required'
    }

    if (!values.address) {
        errors.address='Address required'
    }

    if (!values.pin) {
        errors.pin='PIN code required'
    }else if (/^\d+$/.test(errors.pin)) {
        errors.pin='PIN code required'
    }else if (values.pin.length<6) {
        errors.pin='6 digit pin code required'
    }

        
    return errors
    }

