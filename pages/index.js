import Head from 'next/head'
import Banner from '../src/Components/Banner'
import Feed from '../src/Components/Feed'
import Footer from '../src/Components/Footer'
import Navbar from '../src/Components/Navbar'

export default function Home({products,categories}) {
 
  return (
    <div className="">
      <Head>
        <title>Amzn Cart</title>
        <link rel="icon" href="/a.jpeg" />
      </Head>

      <Navbar/>
      <main className='justify-center lg:px-20 mt-16    '>
      <Banner/>
      <Feed products={products} categories={categories}/>
      
      </main>
      <Footer/>
      
    </div>
  )
}
export async function getStaticProps(context){
  const products = await fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  const categories =await fetch('https://fakestoreapi.com/products/categories')
  .then(res=>res.json())
  
  
  return{
      props:{
          categories,
          products
      }
  }
}
  
  

  
