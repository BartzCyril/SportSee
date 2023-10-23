import {useEffect, useState} from "react";
import {apiFetch} from "../utils/api/api";
import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer} from "recharts";
import {Data} from "../utils/type/type.ts";
import {UserPerformance} from "../utils/data/UserPerformance.ts";

type RadarChartProps = {
    id: string
}

export function RadarChartPerformance({id}: RadarChartProps) {

    const [performanceData, setPerformanceData] = useState<Data | null | boolean | undefined>(null)
    
    useEffect(() => {
        apiFetch(id, "performance")
            .then(setPerformanceData)
            .catch(() => setPerformanceData(false))
    }, [id])

    if (performanceData) {
        return (
            <div className="radarChartPerformance">
                <ResponsiveContainer>
                    <RadarChart width={258} height={263} outerRadius={80} data={performanceData instanceof UserPerformance ? performanceData.data : undefined} >
                        <PolarGrid radialLines={false} stroke="white" />
                        <PolarAngleAxis dataKey="kind" fontSize={12} fontWeight={500} stroke="white" tickLine={false} dy={4}/>
                        <PolarRadiusAxis domain={[0, 'dataMax']} tick={false} axisLine={false}/>
                        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        )
    }

}