import React from 'react'
import { SearchIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { signIn,signOut,session, useSession } from "next-auth/client";
import  Router from "next/router";
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/cartSlice';

function Navbar() {
    const [session] = useSession();
    // const router = useRouter();
    const items = useSelector(selectItems)

    return (
        <div className=' flex  items-center  lg:space-x-12 '>
            <div className='mx-1 md:mr-20 md:ml-10'>
                <Image src='/amzn.png' width={110} height={55} objectFit='contain' layout='fixed' onClick={()=>Router.push('/')} className='cursor-pointer'/>
            </div>
             
            <div className='flex justify-end items-center rounded-lg flex-grow bg-yellow-200 h-8 sm:h-9  '>
                <input type='text'  className='w-4/5 sm:flex-grow outline-none  bg-transparent text-sm p-2 '/>
                <SearchIcon className='h-10 p-2 justify-end font-black cursor-pointer'/>    
            </div>

            <div className=' flex  items-center m-3 justify-end ' >
                <div className=' flex items-center px-3 cursor-pointer  ' onClick={!session ? signIn :signOut}>
                    <UserIcon className='h-9 p-1  ' />
                    <p className='text-xs '>{session ? `hello, ${session.user.name}`: ' Sign In'}</p>
                </div>
                <span className='absolute h-5 w-5 rounded-full  text-center  bg-yellow-300 right-2 top-4 md:right-9   text-sm lg:text-base '>{items.length}</span>
                <div className='relative cursor-pointer' onClick={()=>Router.push('/cart')}>
                <ShoppingBagIcon className='h-10 p-2 md:mr-10' />
                </div>
            </div>
            
            
        </div>
    )
}

export default Navbar
