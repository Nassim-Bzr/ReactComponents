function Instructions() {
    const instructions = [
        "Beat the eggs: in a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a fablespoon of water or mill for a fluffier texture.",
        "Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.",
        "Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan fo ensure the eggs evenly coat the surface.",
        "Add fillings (optional): When the eggs begin fo set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
        "Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onfo a plate.",
        "Enjoy: Serve hot, with additional salt and pepper if needed."
    ];

    return (
        <div className="div-instructions">
            <h2 className="title-instructions">Instructions</h2>
            <ul className="ul-instructions">
                {instructions.map((instruction, index) => (
                    <li key={index} className="li-instructions">
                        {instruction}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Instructions;

