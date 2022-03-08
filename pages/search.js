import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../src/Components/Navbar'
import SearchProducts from '../src/Components/SearchProducts'
import { searchProducts, selectSearchItems } from '../src/slices/searchSlice'
import Head from 'next/head'
import { EmojiSadIcon } from '@heroicons/react/outline'

function search({ products }) {
    const dispatch = useDispatch()
    const [results, setResults] = useState([])
    const search = useSelector(selectSearchItems)

    useEffect(() => {
        setResults([])
        products.map(e => {
            search.key.length >= 2 &&
                e.title.toLowerCase().includes(search.key.toLowerCase()) &&
                setResults(results => [...results, e])
        })
    }, [search.key])

    dispatch(searchProducts(results))

    return (
        <div>
            <Head>
                <title>Search</title>
                <link rel="icon" href="/a.jpeg" />

            </Head>
            <Navbar />
            <div className='m-10'>
                <h1 className='mx-auto flex '>search results for<p className='font-bold ml-3'>' {search.key} '</p>  </h1>
                {search.results.length === 0 ?
                    <div className='text-center justify-center mt-10 flex font-semibold'>
                        No Results <EmojiSadIcon className='h-7 ml-3 animate-bounce ' />
                    </div>
                    :
                    <div className=''>
                        <p>{search.results.length} items</p>
                    </div>}
            </div>
            <SearchProducts />




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