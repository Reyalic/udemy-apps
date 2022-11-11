import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const App = () => {

    const [categories, setCategories] = useState(["One Punch"])

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
    }
  return (
    <div>
        <h1>Gif Expert App</h1>
        <AddCategory 
            onNewCategory={e => onAddCategory(e)} 
        />
        <div>
            {
                categories.map(category => (
                    <GifGrid 
                        key={category} 
                        category={category} 
                    />
                ))
            }
        </div>
    </div>
  )
}

export default App