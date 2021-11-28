import React from 'react'
import Image from 'next/image'

function Footer() {
    return (
        <div className='mt-20 border-t-8 border-yellow-300 h-20 lg:h-40  inset-x-0   bottom-0'>
            <div className='w-full bg-blue-700 text-center'>
                <a className=' text-xs md:text-sm lg:text-base text-white cursor-pointer '>to top</a>
            </div>
            <div className='p-1 md:px-6'>
                <Image src='/amzn.png' width={110} height={55} objectFit='contain' layout='fixed'/> 
                

            </div>
        </div>
    )
}

export default Footer
