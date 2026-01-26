import { useState } from "react"
import Recipe from "./Recipe"
import IngredientsList from "./IngredientsList"

const Main = () => {

    const [ingredients, setIngredients] = useState([])
    const [recipeShown, setRecipeShown] = useState(false)

    const ingredientListItems = ingredients.map(ingredient => <li className="list-disc ml-6 text-gray-600 text-lg mb-3">{ingredient}</li>)

    const addIngredient = formData=> {
        const newIngredient = formData.get('addIngredient')
        setIngredients(prev => [...prev, newIngredient])
    }

    return (
        <main className="py-17 px-6 max-w-148 mx-auto">
            <form 
                action={addIngredient}
                className="flex justify-center gap-3"
            >
                <input 
                    type="text"
                    required
                    id='addIngredient'
                    name='addIngredient'
                    aria-label="add ingredient"
                    placeholder="e.g. oregano"
                    className="max-w-100 flex-1 px-3.25 py-2.25 rounded-md border border-[#D1D5DB] placeholder:text-sm"
                />
                <button 
                    type='submit'
                    className="bg-[#141413] text-[#FAFAF8] text-sm font-medium font-inherit py-2.25 px-9 rounded-md cursor-pointer"
                >
                    + Add ingredient
                </button>
            </form>
            { ingredients.length > 0 && 
                <IngredientsList ingredientListItems={ingredientListItems} ingredients={ingredients}/>
            }
            { recipeShown && 
                <Recipe />
            }
           
            
        </main>
    )
}

export default Main