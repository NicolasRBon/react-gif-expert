import { useState } from "react"
import { GifGrid, TextInput } from "./components"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])
    const [newCategory, setNewCategory] = useState('')

    const onAddCategory = category => {
        if(!categories.includes(category))
        setCategories([...categories, category])
    }

    return (
        <>
            {/* Titulo */}
            <h1>Gif Expert App</h1>
            {/* Input */}
            <TextInput onNewInputValue={onAddCategory} />

            { categories.map( category => <GifGrid key={category} category={category} /> ) }

            {/* Listado Gifs */}

        </>
    )
}