function Ingredients() {
    const ingredients = [
        "2-3 large eggs",
        "Salt, to taste",
        "Pepper to taste",
        "1 tablespoon of butter or oil",
        "Optional filling cheese diced vegetables cooked meats herbs"
    ];

    return (
        <div className="div-ingredients">
            <h2 className="title-ingredients"> Ingredients</h2>
            <ul className="ul-ingredients">
                {ingredients.map((ingredient, index) => (
                    <li key={index} className="li-ingredients">{ingredient}</li>
                ))}
            </ul>
        </div>
    );
}
export default Ingredients;

