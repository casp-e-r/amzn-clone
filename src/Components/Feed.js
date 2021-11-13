import React,{useState} from 'react'
import ProductCard from './ProductCard'
import { shuffleArray } from "../util";


function Feed({ products,categories }) {  
    const [state, setState] = useState('all')
    const SProducts= shuffleArray(products)
    
    return (
        <div className='  lg:mx-28 md:mt-12 '>
            {/* <div className=' text-sm rounded-md bg-yellow-300 m-1 lg:m-8 justify-between flex p-3 md:px-20 '> */}
                <div className='text-white bg-blue-700 text-xs rounded-md bg-tranparent m-1 lg:m-8 justify-between flex p-1 md:px-20 ' >
                <button className={state==='all' ? 'cursor-pointer font-extrabold text-blue-700 bg-yellow-300 rounded p-2':' cursor-pointer hover:text-blue-700 hover:font-extrabold hover:bg-yellow-400 rounded p-2'} onClick={()=>setState('all')}>all</button>
                {categories.map(res=>(
                   <button className={state===res ? 'cursor-pointer font-extrabold text-blue-700 bg-yellow-300  rounded p-2':'cursor-pointer hover:text-blue-700 hover:font-extrabold hover:bg-yellow-400 rounded p-2'} onClick={()=>setState(res)}>{res}</button>
                   )  )}
                
            </div>
            <div className='mx-8 lg:mx-16'>

            
            <div className='  grid grid-flow-row grid-cols md:grid-cols-2 lg:grid-cols-3'>
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



