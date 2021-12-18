export default function validatePayment(values){
    let errors={};
    
    if (!values.cardno.trim()) {
        errors.cardno= 'card number required'
    }
    return errors
}