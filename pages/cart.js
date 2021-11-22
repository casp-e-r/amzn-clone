import Cart from "../src/Components/Cart"
import Footer from "../src/Components/Footer"
import Navbar from "../src/Components/Navbar"
import Head from 'next/head'


function cart() {
    return (
        <div>
            <Head>
                <title> Cart page </title>
            </Head>
            <Navbar/>
            <Cart/>
            <Footer/>
        </div>
    )
}

export default cart
