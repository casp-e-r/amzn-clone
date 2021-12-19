export default function validatePayment(values){
    let errors={};
    
    if (!values.cardno.trim()) {
        errors.cardno= 'card number required'
    }else if (values.cardno.length<16) {
        errors.cardno='16 digit card number required'
    }

    if (!values.exp) {
        errors.exp='expiry date required'
    }

    if (!values.cvv) {
        errors.cvv='CVV required'
    }
    return errors
}