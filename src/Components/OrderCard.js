import React from 'react'

function OrderCard({order}) {
    let sum=0
    order.cart.map(e=>{
        sum=sum+e.quantity*e.price
    })
    console.log(order);
    return (
        <div className="w-full flex flex-row border-2 text-sm rounded border-blue-50 p-2 ">
            <div className="grid flex-grow rounded-md px-2  bg-blue-900 text-gray-200 ">

            {order.cart.map((e,i)=>{
                return <div className="my-1 p-1  ">
                    <p>{e.title}</p>
                    <p className="text-xs">quantity:{e.quantity}</p>
                    </div>
            })}
            <p className="p-3 flex flex-row ">Total Amount :<h5 className="pl-3 text-indigo-50 font-extrabold">{sum}</h5></p>
            </div>
            <div className="ml-auto px-5 align-text-bottom bg-yellow-300 rounded-md pt-10 ">
                    <p className="">{order.shipping.address}</p>
                    <p className='pt-2'>Pincode:{order.shipping.pin}</p>

                </div>
        </div>
    )
}

export default OrderCard
