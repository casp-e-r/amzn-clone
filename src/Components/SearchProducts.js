import React from 'react'
import { useSelector } from 'react-redux'
import { selectSearchItems } from '../slices/searchSlice'
import Image from 'next/image'
import ProductCard from './ProductCard'



function SearchProducts() {
    const search = useSelector(selectSearchItems)
    
    return (
        <div className='my-10 mx-20 '>
            <div className='grid grid-flow-row grid-cols md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
            {search.results.map(e=>{
                return <ProductCard product={e}/>
                // return <div>
                //         <div className='mx-4 p-2'>
                //             <Image width={80} height={80} src={e.image} layout='fixed' objectFit='contain' />
                //         </div>
                //         <h1>{e.title}</h1>
                // </div>
            })}
            </div>
            
        </div>
    )
}

export default SearchProducts
