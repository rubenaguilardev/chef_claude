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
                    type="s"
                    name="ingredient" 
                    placeholder="e.g. oregano" 
                    aria-label="add ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>
            <ul>
                {listItems}
            </ul>
        </main>
    )
}