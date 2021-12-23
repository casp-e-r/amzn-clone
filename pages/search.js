import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../src/Components/Navbar'
import SearchProducts from '../src/Components/SearchProducts'
import { searchProducts, selectSearchItems } from '../src/slices/searchSlice'

function search({ products }) {
    const dispatch = useDispatch()
    const [results, setResults] = useState([])
    const search = useSelector(selectSearchItems)

    console.log(search.key);
    console.log(products);
    
    useEffect(() => {
        products.map(e => {
            console.log(e.title.includes(search.key))
            search.key.length >= 2 && e.title.includes(search.key) && setResults([...results, e])

        })
    }, [search.key])
    console.log(results);

    dispatch(searchProducts(results))
    return (
        <div>
            <Navbar />
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