import {useState} from 'react'
import IngredientsList from '../components/IngredientsList'
import Recipe from '../components/Recipe'

export default function Main() {
    
    const [addIngredient, setAddIngredient] = useState(['milk', 'cheese', 'cream', 'salt'])
    const [recipeShown, setRecipeShown] = useState(false)

    const listItems = addIngredient.map(item => <li key={item}>{item}</li>)

    function addItem(formData) {
        const ingredient = formData.get('ingredient')

        setAddIngredient(prevIngredients => [...prevIngredients, ingredient])
    }

     function toggleRecipeShown() {
        setRecipeShown(true)
    }
   

    return (
        <main>
            <form action={addItem}>
                <input 
                    type="search"
                    name="ingredient" 
                    placeholder="e.g. oregano" 
                    aria-label="add ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>   
            {listItems.length > 0 && 
                <IngredientsList 
                listItems={listItems}
                toggleRecipeShown={toggleRecipeShown}
                 />
            }
            {recipeShown && 
                <Recipe />
            }
        </main>
        
    )
}

