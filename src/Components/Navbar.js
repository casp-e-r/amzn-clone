import React, { useEffect, useState } from 'react'
import { SearchIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { signIn, signOut, session, useSession } from "next-auth/client";
import Router from "next/router";
import { useSelector,useDispatch } from 'react-redux';
import { selectItems,showCart,toggleCart } from '../slices/cartSlice';
import Cart from './Cart';
import { searchKey } from '../slices/searchSlice';

function Navbar() {
    const [session] = useSession();
    const [search, setSearch] = useState('')
    // const [show, setShow] = useState(false)
    const items = useSelector(selectItems)
    const toggle = useSelector(toggleCart)
    const dispatch = useDispatch()


    useEffect(() => {
      if(!toggle){
        //document.body.style.overflow='hidden'
        document.body.style.scrollMargin='none'
      }
    }) 
    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            dispatch(searchKey(search))
            Router.push('/search')
        }
    }


    return (
        <div className=' relative  top-0 z-50 '>
            <div className='flex items-center lg:space-x-12 '>

                <div className='mx-1 md:mr-20 md:ml-10'>
                   <Image src='/amzn.png' width={110} height={55} objectFit='contain' layout='fixed' onClick={() => Router.push('/')} className='cursor-pointer' />
                </div>

                <div className='flex flex-grow justify-end items-center md:space-x-8'>
                    <div className='flex items-center rounded-lg bg-yellow-200 h-7 sm:h-9 mr-1 sm:mr-4'>
                        <input type='text' className=' placeholder-black placeholder-opacity-70 w-3/5 outline-none flex-grow placeholder-shown:text-sm bg-transparent text-sm p-2 '
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        placeholder="Search..."
                        onKeyDown={handleKeyDown}/>
                        <button
                        onClick={()=>{Router.push('/search'),dispatch(searchKey(search))}}><SearchIcon className='h-10 p-2 font-black cursor-pointer rounded-3xl hover:scale-110 hover:bg-opacity-30 duration-300' /></button>
                    </div>                
                    {session ? <div className="group inline-block relative items-center  ">
                        <button
                            className="  font-semibold py-1 px-1 rounded inline-flex items-center">
                            <UserIcon className='h-8 p-1  ' />
                            <svg className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg" 
                                iewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </button>
                        <ul className="absolute hidden z-50 bg-yellow-200   rounded-md  group-hover:block">
                            {session && <li className="">
                                <button
                                    className=" text-sm  py-2 px-6 block whitespace-nowrap hover:bg-yellow-400"
                                    onClick={() => Router.push('/account')}> My account </button>
                            </li>}
                            <li className="">
                                <button
                                    className=" text-sm py-2 w-full px-6 block whitespace-nowrap hover:bg-yellow-400"
                                    onClick={signOut}
                                >Sign Out </button>
                            </li>
                        </ul>
                    </div> :
                    <button className=" text-sm py-1 sm:py-2 font-medium px-3 sm:px-6 block whitespace-nowrap rounded-lg hover:bg-yellow-200 duration-500 ease-in-out"
                         onClick={ ()=>Router.push('/signin') }
                        >Log In </button>
                    }
            
                    <div className=' flex  items-center mx-2 sm:m-3 justify-end ' >
                        <span className='absolute h-5 w-5 rounded-full  text-center  bg-yellow-300 right-1 sm:right-2 top-4 md:right-9  text-sm lg:text-base '>{items.length}</span>
                        <div className='relative cursor-pointer' onClick={()=>dispatch(showCart(true))}>
                            <ShoppingBagIcon className='h-9 sm:h-10 p-2 md:mr-10' />
                        </div>
                    </div>
                </div>

            </div>
            
            <Cart/>
        </div>
        
    )
}

export default Navbar
