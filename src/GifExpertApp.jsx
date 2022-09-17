import React, { useState } from "react"
import { AddCategory, GifGrid } from "./components"
import PropTypes  from "prop-types"


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ '' ])

    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory) ) return;
        setCategories( categories => [...categories, newCategory])
    }
    return (
        <>
        <h1>GifExpertApp</h1>

        <AddCategory 
        onNewCategory={ onAddCategory }
        />
            { categories.map( category => (
                <GifGrid key={ category } category= { category }/>
                ))
            }

        </>
    )
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired,
}