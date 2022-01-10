import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../src/Components/Navbar'
import SearchProducts from '../src/Components/SearchProducts'
import { searchProducts, selectSearchItems } from '../src/slices/searchSlice'
import Head from 'next/head'

function search({ products }) {
    const dispatch = useDispatch()
    const [results, setResults] = useState([])
    const search = useSelector(selectSearchItems)

    // console.log(search.key);
    // console.log(products);
    
    useEffect(() => {
        setResults([])
        products.map(e => {
            search.key.length >= 2 && 
            e.title.toLowerCase().includes(search.key.toLowerCase()) && 
            setResults(results=>[...results, e])
            
            // console.log(e);
        })
    }, [search.key])
    // console.log(results);

    dispatch(searchProducts(results))

    return (
        <div>
            <Head>
                <title>Search</title>
            </Head>
            <Navbar />
            <div className='m-10'>
                <h1>search results for {search.key} </h1>
                <p>{search.results.length} items</p>
            </div>
            <SearchProducts/>




        </div>
    )
}

export default search

export async function getStaticProps(context) {
    const products = await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
    const categories = await fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())


    return {
        props: {
            categories,
            products
        }
    }
}