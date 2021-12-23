import React from 'react'
import { useSelector } from 'react-redux'
import { selectSearchItems } from '../slices/searchSlice'

function SearchProducts() {
    const search = useSelector(selectSearchItems)
    
    return (
        <div>
            {search.results.map(e)}
            
        </div>
    )
}

export default SearchProducts
