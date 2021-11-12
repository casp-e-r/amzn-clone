import React from 'react'
import { SearchIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/outline'
import Image from 'next/image'


function Navbar() {
    return (
        <div className=' flex  items-center  lg:space-x-12 '>
            <div className='mx-1 md:mr-20 md:ml-10'>
                <Image src='/amzn.png' width={110} height={55} objectFit='contain' layout='fixed'/>
            </div>
             
            <div className='flex  items-center rounded-lg  bg-yellow-300 h-9 flex-grow  '>
                <input type='text'  className=' flex-grow outline-none  bg-transparent text-sm p-2 '/>
                <SearchIcon className='h-10 p-2 font-black cursor-pointer'/>    
            </div>

            <div className='flex  items-center m-3 ' >
                <div className='hidden sm:flex items-center px-3 '>
                    <UserIcon className='h-10 p-2 cursor-pointer ' />
                    <p className='text-xs '>hello sign in</p>
                </div>
                <div className='cursor-pointer'>
                <ShoppingBagIcon className='h-10 p-2 md:mr-10'/>
                </div>
            </div>
            
            
        </div>
    )
}

export default Navbar
