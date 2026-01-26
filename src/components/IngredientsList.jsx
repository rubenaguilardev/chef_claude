const IngredientsList = (props) => {

    const ingredientListItems = props.ingredients.map(ingredient => <li className="list-disc ml-6 text-gray-600 text-lg mb-3">{ingredient}</li>)

    return (
        <section>
            <div className="my-12">
                <h2 className="text-3xl font-semibold mb-6">Ingredients on hand:</h2>
                <ul>
                    {props.ingredientListItems}
                </ul>
            </div>
            { props.ingredients.length > 3 &&
                <div className="flex justify-between items-center rounded-lg px-12 py-7 bg-[#F0EFEB]">
                    <div>
                        <h2 className="text-lg font-medium mb-2.5">Ready for a recipe?</h2>
                        <p className="text-sm text-[#6B7280]">Generate a recipe from your list of ingredients</p>
                    </div>
                    <div>
                        <button 
                            onClick={props.toggleRecipeShown}
                            className="text-sm font-medium bg-[#D17557] text-[#FAFAF8] px-4.25 py-2.25 rounded-md cursor-pointer">Get a recipe</button>
                    </div>
                </div>
            }
        </section>
    )
}

export default IngredientsList