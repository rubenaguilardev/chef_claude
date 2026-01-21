import { useState } from "react"

const Main = () => {

    const [ingredients, setIngredients] = useState([])

    const ingredientListItems = ingredients.map(ingredient => <li>{ingredient}</li>)

    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newIngredient = formData.get('addIngredient')
        setIngredients(prev => [...prev, newIngredient])
    }

    return (
        <main className="py-17 px-6">
            <form 
                onSubmit={handleSubmit}
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
            <ul>
                {ingredientListItems}
            </ul>
        </main>
    )
}

export default Main