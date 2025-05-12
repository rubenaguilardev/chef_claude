import { useState } from 'react'

export default function IngredientsList(props) {    

    return (
        <section className="section">
            <h2>Ingredients on hand:</h2>
            <ul>
                {props.listItems}
            </ul>
            {props.listItems.length > 3 &&
            <div className="getRecipe">
                <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.toggleRecipeShown}>Get a recipe</button>
            </div>}
        </section>
    )
}