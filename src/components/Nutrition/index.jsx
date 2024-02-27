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
                The table below shows nutrional values per serving without the additional fillings
            </p>
            <table className=" table-nutrition">
                <tr className="tr-table">
                    {data.map((item, index) => (
                        <th key={index} className="text-th">
                            {item.label}
                        </th>
                    ))}
                </tr>
                <tr className="tr-calories">
                    {data.map((item, index) => (
                        <td key={index} className="number-calories">
                            {item.value}
                        </td>
                    ))}
                </tr>
            </table>
        </div>
    );
}
export default Nutrition;

