import { useState } from "react"
import { AddCategory, GifGrid  } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState<string[]>([ 'Naruto' ])
  
  const onAddCategory = (newCategory: string) => {
    
    if( categories.find((cat) => cat.toLocaleLowerCase() == newCategory.toLocaleLowerCase()) ) return;
    
    setCategories([...categories, newCategory]);
  };

  return (
    <>  
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={ value => onAddCategory(value) }
      />

      {
        categories.map( (category) => (
            <GifGrid key={ category } category={ category }/>
          ))
      }
    
    </>
  )
}