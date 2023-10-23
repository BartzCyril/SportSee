import {useEffect, useState} from "react";
import {apiFetch} from "../utils/api/api";
import {Name} from "./Name";
import {Nutritional} from "./Nutritional";
import {RadarChartPerformance} from "./RadarChartPerformance";
import {RadialBarChartScore} from "./RadialBarChartScore";
import {Loading} from "./Loading";
import {Error} from "./Error";
import {LineChartAverageSessions} from "./LineChartAverageSessions";
import {BarChartActivity} from "./BarChartActivity";
import {UserData} from "../utils/data/UserData.ts";
import {Data} from "../utils/type/type.ts";

type MainProps = {
    id: string
}

export function Main({id}: MainProps) {

    const [userData, setUserData] = useState<Data | null | boolean | undefined>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        apiFetch(id)
            .then(setUserData)
            .catch(() => setUserData(false))
            .finally(() => setLoading(false))
    }, [id])

    if (loading) {
        return (
            <main>
                <div className="main-div">
                    <Loading/>
                </div>
            </main>
        )
    }

    if (!userData && !loading) {
        return (
            <main>
                <div className="main-div">
                    <Error/>
                </div>
            </main>
        )
    }

    return (
        <main>
            <div className="main-div">
                <Name name={userData instanceof UserData ? userData.firstName : undefined}/>
                <div className="main-div-items">
                    <div className="barChart">
                        <BarChartActivity id={id}/>
                        <div className="barChartLine">
                            <LineChartAverageSessions id={id}/>
                            <RadarChartPerformance id={id}/>
                            <RadialBarChartScore value={userData instanceof UserData ? userData.score : undefined}/>
                        </div>
                    </div>
                    <Nutritional userData={userData}/>
                </div>
            </div>
        </main>
    )

}