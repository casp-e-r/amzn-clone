import React from 'react'
import Product from '../../src/Components/Product'
import Navbar from '../../src/Components/Navbar'
import Footer from '../../src/Components/Footer'

function  detail({product}) {
    
    return (
        <div className=' h-screen justify-between'>
            <Navbar/>
            <div className='h-auto mt-16'>
                <Product product={product} />

            </div>
            <Footer/>
        </div>
    )
}

export default detail

export async function getServerSidePaths() {
    const products =await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
      const paths=products.map(p=>({
          params:{id:p.id.toString()}
      }))
      return{ paths, fallback:false }
    // Return a list of possible value for id

}

  export async function getServerSideProps({ params }) {
    // Fetch necessary data for the product details using params.id
    console.log(params);
   
    const product =await fetch(`https://fakestoreapi.com/products/${params.id}`)
   .then(res=>res.json())
   return{
    props:{
        product
    }
    }
  }

