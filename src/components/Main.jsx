import { useState } from "react"

const Main = () => {

    const [ingredients, setIngredients] = useState([])

    const ingredientListItems = ingredients.map(ingredient => <li className="list-disc ml-6 text-gray-600 text-lg mb-3">{ingredient}</li>)

    const addIngredient = formData=> {
        const newIngredient = formData.get('addIngredient')
        setIngredients(prev => [...prev, newIngredient])
    }

    return (
        <main className="py-17 px-6">
            <form 
                action={addIngredient}
                className="flex justify-center gap-3"
            >
                <input 
                    type="text"
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
            <div className="w-148 mx-auto my-12">
                <h2 className="text-3xl font-semibold mb-6">Ingredients on hand:</h2>
                <ul>
                    {ingredientListItems}
                </ul>
            </div>
            <div className="max-w-148 mx-auto flex justify-between items-center rounded-lg px-12 py-7 bg-[#F0EFEB]">
                <div>
                    <h2 className="text-lg font-medium mb-2">Ready for a recipe?</h2>
                    <p className="text-lg text-[#6B7280]">Generate a recipe from your list of ingredients</p>
                </div>
                <div>
                    <button className="text-sm font-medium bg-[#D17557] text-[#FAFAF8] px-4.25 py-2.25">Get a recipe</button>
                </div>
                
            </div>
            
        </main>
    )
}

export default Main