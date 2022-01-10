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
        <div className='pt-5 w-full h-full overflow-hidden '>
            {checkout.order && checkout.order.map(e=>{
                return <div className='grid my-2  w-full overflow-hidden'>
                    <OrderCard order={e}/>
                </div>
            })}
        </div>
    )
}

export default Orders
