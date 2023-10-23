type NutritionalItemsProps = {
    name: "Calories" | "Proteines" | "Glucides"  | "Lipides",
    value: number
}

export function NutritionalItems({name, value}: NutritionalItemsProps) {

    const transform = () => {
        switch (name) {
            case "Calories" :
                return value.toLocaleString().replace(/\s/g, ',') + "kCal"
            default :
                return value + "g"
        }
    }

    return (
        <div className="nutritionalItems">
            <img src={`/SportSee/img/${name}.svg`} alt={name}/>
            <div>
                <p>{transform()}</p>
                <span>{name}</span>
            </div>
        </div>
    )
}