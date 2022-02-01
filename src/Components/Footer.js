import React from 'react'
import Image from 'next/image'
import { CodeIcon } from '@heroicons/react/outline'

function Footer() {
    return (
        <div className='mt-auto border-t-8 border-yellow-300 h-20 lg:h-40  bottom-0'>
            
            <div className=' md:px-6 border-t-8 border-blue-700 text-center pb-4 '>
                <Image src='/amzn.png' width={107} height={50} objectFit='contain' layout='fixed'/> 
                <a href='https://github.com/casp-e-r/amzn-clone' target='_blank'> <CodeIcon className='h-5 mx-auto hover:animate-pulse  '/> </a>
                
                

            </div>
        </div>
    )
}

export default Footer
