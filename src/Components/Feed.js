import React,{useState} from 'react'
import ProductCard from './ProductCard'
import { shuffleArray } from "../util";


function Feed({ products,categories }) {  
    const [state, setState] = useState('all')
    const SProducts= shuffleArray(products)
    
    return (
        <div className='  lg:mx-17 xl:mx-28 md:mt-12 mb-24'>
            {/* <div className=' text-sm rounded-md bg-yellow-300 m-1 lg:m-8 justify-between flex p-3 md:px-20 '> */}
            <div className='text-white bg-blue-700 text-xs rounded-md bg-tranparent m-1 lg:m-8 justify-between flex p-1  lg:px-10 xl:px-20 ' >
                <button 
                className={`cursor-pointer font-extrabold hover:text-blue-700 hover:font-extrabold hover:bg-yellow-400 rounded p-2 ${state==='all' && "text-blue-700 bg-yellow-400"}`} 
                onClick={()=>setState('all')}>all</button>
                {categories.map(res=>(
                   <button 
                    className={`cursor-pointer font-extrabold hover:text-blue-700 hover:font-extrabold hover:bg-yellow-400 rounded p-2 ${state===res && "text-blue-700 bg-yellow-400"}`} 
                    onClick={()=>setState(res)}>{res}</button>
                   )  )}
                
            </div>
            <div className='mx-10 xl:mx-20'>

            
            <div className='  grid grid-flow-row grid-cols md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
            {SProducts?.map((product) =>
            state === "all" ? (<ProductCard  product={product} />) 
            : state === product.category ? (
            <ProductCard  product={product} />
            ) : null
            )}
            </div>
            </div>
            

            
        </div>
    )
}


export default Feed



