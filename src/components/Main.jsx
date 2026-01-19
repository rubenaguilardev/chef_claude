const Main = () => {
    return (
        <main className="pt-17 pb-20 px-6">
            <form className="flex justify-center gap-3">
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
        </main>
    )
}

export default Main