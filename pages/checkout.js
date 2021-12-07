import { useSelector } from "react-redux"
import { selectItems } from "../src/slices/cartSlice"
import Image from 'next/image';
import Review from "../src/Components/checkout/Review";
import  Router  from "next/router";
import { useEffect, useState } from "react";
import Shipping from "../src/Components/checkout/Shipping";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import Payment from "../src/Components/checkout/Payment";

function checkout(){
    const items = useSelector(selectItems)
    const [state, setstate] = useState(0)
    console.log(state);
    useEffect(() => {
        // items.length<=0 && Router.push('/')
    }, [])
    return(
        <div className=' grid mt-16 '>        
            <div className=' mb-14 mx-auto flex space-x-20 md:space-x-48 '>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-xs md:text-base rounded-full bg-yellow-400 h-6 w-6 md:h-10 md:w-10 flex justify-center items-center'>1</div>
                    <p className='py-2 text-xs'>order summary</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-xs md:text-base rounded-full bg-yellow-400 h-6 w-6 md:h-10 md:w-10 flex justify-center items-center'>2</div>
                    <p className='py-2 text-xs'>shipping details</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-xs  md:text-base rounded-full bg-yellow-400 h-6 w-6 md:h-10 md:w-10 flex justify-center items-center'>3</div>
                    <p className='py-2 text-xs'>payment</p>
                </div>     
            </div>
            <div className=' md:w-1/2 '>
                {state===0 ? <Review /> : state===1 ? <Shipping/> : <Payment/>}
            </div>
            <div className='mx-auto space-x-60 mt-auto'>
              <button onClick={state ?()=> setstate(state-1) :null} 
              className={state===0 ? 'cursor-not-allowed':'cursor-pointer'}><ChevronLeftIcon height={30}/></button> 
              <button onClick={state!==2 ?()=>setstate(state+1) : null} 
              className={state===2 ? 'cursor-not-allowed':'cursor-pointer'}><ChevronRightIcon width={30}/></button> 

            </div>
            <button onClick={()=>Router.push('/')}>iiiiiiiiiiiiiiiii</button>
        </div>
    )
}

export default checkout
