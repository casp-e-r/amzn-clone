import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {checkoutItems} from '../slices/checkoutSlice'
import OrderCard from './OrderCard'

function Orders() {
    // const [orderShip, setOrderShip] = useState()
     const dispatch = useDispatch()
     const checkout = useSelector(checkoutItems)
    console.log(checkout.order);
    return (
        <div className='py-10'>
            {checkout.order && checkout.order.map(e=>{
                return <div>
                    <OrderCard order={e}/>
                </div>
            })}
        </div>
    )
}

export default Orders
