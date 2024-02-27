function PreparationTime() {
    const preparationData = [
        { label: "Total", time: "Approximately 10 minutes" },
        { label: "Preparation", time: "5 minutes" },
        { label: "Cooking", time: "5 minutes" },
    ];

    return (
        <div className="div-preparation">
            <h2 className="title-preparation">Preparation time</h2>
            <ul className="ul-preparation">
                {preparationData.map((item, index) => (
                    <li key={index} className="li-preparation">
                        <strong>{item.label}:</strong> {item.time}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default PreparationTime;

