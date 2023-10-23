import {NutritionalItems} from "./NutritionalItems";

export function Nutritional({userData}: any) {

    return (
        <section className="section-nutritional">
            <NutritionalItems name={"Calories"} value={userData.calorieCount}/>
            <NutritionalItems name={"Proteines"} value={userData.proteinCount}/>
            <NutritionalItems name={"Glucides"} value={userData.carbohydrateCount}/>
            <NutritionalItems name={"Lipides"} value={userData.lipidCount}/>
        </section>
    )

}