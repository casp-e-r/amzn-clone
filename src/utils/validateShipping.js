export default function validateShipping(values){
    let errors={}
    if (values.name.trim()) {
        errors.name= 'name required'
    }
    return errors
}