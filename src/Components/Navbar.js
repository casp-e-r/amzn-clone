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



    return (
        <div className=' relative  top-0 z-50'>
            <div className='flex items-center lg:space-x-12 '>

                <div className='mx-1 md:mr-20 md:ml-10'>
                   <Image src='/amzn.png' width={110} height={55} objectFit='contain' layout='fixed' onClick={() => Router.push('/')} className='cursor-pointer' />
                </div>

                <div className='flex flex-grow justify-end items-center md:space-x-8'>
               
                    <div className='flex items-center rounded-lg bg-yellow-200 h-8 sm:h-9 mr-1 sm:mr-4'>
                        <input type='text' className='w-3/5 outline-none flex-grow  bg-transparent text-sm p-2 '
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}/>
                        <button
                        onClick={()=>{Router.push('/search'),dispatch(searchKey(search))}}><SearchIcon className='h-10 p-2 font-black cursor-pointer' /></button>
                    </div>
                    {console.log(search)}
                
                    <div className="group inline-block relative items-center  ">
                        <button
                            className="  font-semibold py-1 px-1 rounded inline-flex items-center">
                            <UserIcon className='h-8 p-1  ' />
                            <svg className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg" 
                                iewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </button>
                        <ul className="absolute hidden z-50 bg-yellow-100 pt-1 py-1  group-hover:block">
                                <li className="">
                                <button
                                    className=" text-sm  py-2 px-6 block whitespace-nowrap"
                                    onClick={() => Router.push('/account')}> My account </button>
                                </li>
                                <li className="">
                                <button
                                    className=" text-sm py-2 px-6 block whitespace-nowrap"
                                    onClick={!session ? ()=>Router.push('/signin') : signOut}
                                    >{session ? 'sign out':'log in'} </button>
                            </li>
                        </ul>
                    </div>
            
                    <div className=' flex  items-center m-3 justify-end ' >
                        <span className='absolute h-5 w-5 rounded-full  text-center  bg-yellow-300 right-2 top-4 md:right-9  text-sm lg:text-base '>{items.length}</span>
                        <div className='relative cursor-pointer' onClick={()=>dispatch(showCart(true))}>
                            <ShoppingBagIcon className='h-10 p-2 md:mr-10' />
                        </div>
                    </div>
                </div>

            </div>
            {toggle && <Cart  t={toggle}/> }
        </div>
        
    )
}

export default Navbar
