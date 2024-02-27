function Nutrition() {
    const data = [
        { label: "Calories", value: "94" },
        { label: "Protein", value: "7g" },
        { label: "Fat", value: "7g" },
        { label: "Carbs", value: "1g" },
    ];

    return (
        <div className="div-nutrition">
            <h2 className="title-nutrition">Nutrition</h2>
            <p className="text-nutrition">
                The table below shows nutritional values per serving without the additional fillings
            </p>
            <div className="nutrition-values">
                {data.map((item, index) => (
                    <p key={index} className="nutrition-value">
                        {item.label}: {item.value}
                    </p>
                ))}
            </div>
        </div>
    );
}
export default Nutrition;
