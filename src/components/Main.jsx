import {useState} from 'react'

export default function Main() {
    
    const [addIngredient, setAddIngredient] = useState([])

    const listItems = addIngredient.map(item => <li key={item}>{item}</li>)

    function addItem(formData) {
        const ingredient = formData.get('ingredient')

        setAddIngredient(prevIngredients => [...prevIngredients, ingredient])
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
            <section>
                <h2>Ingredients on hand:</h2>
                <ul>
                    {listItems}
                </ul>
                <div className="getRecipe">
                <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section> 
        </main>
        
    )
}


{/* <ul>
                {listItems}
            </ul> */}