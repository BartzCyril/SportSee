import {useEffect, useState} from "react";
import {apiFetch} from "../utils/api/api";
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {Data} from "../utils/type/type.ts";
import {UserActivity} from "../utils/data/UserActivity.ts";

type BarChartActivityProps = {
    id: string
}
export function BarChartActivity({id}: BarChartActivityProps) {

    const [activityData, setActivityData] = useState<Data | null | boolean | undefined>(null)

    const formatterLegend = (value: string) => {
        if (value === "kilogram") {
            return (
                <span className="formatterLegend formatterLegendGap">
                    Poids (kg)
                </span>
            )
        }

        return (
            <span className="formatterLegend">
                   Calories brûlées (kCal)
            </span>
        )
    }
    
    useEffect(() => {
        apiFetch(id, "activity")
            .then(setActivityData)
            .catch(() => setActivityData(false))
    }, [id])

    if (activityData) {
        return (
            <div className="barChartActivity">
                <ResponsiveContainer>
                    <BarChart width={835} height={320} data={activityData instanceof UserActivity ? activityData.data : undefined} margin={{
                        top: 112,
                        left: 43,
                        right: 29,
                        bottom: 23
                    }} barGap={8}>
                        <text x={30} y={36} fontSize={15} fontWeight={500} fill="#20253A">Activité quotidienne</text>
                        <CartesianGrid strokeDasharray="2 3" vertical={false} stroke="#DEDEDE"/>
                        <XAxis dataKey="day" tickLine={false} axisLine={{stroke: "#DEDEDE"}} tickMargin={15.5} tick={{stroke: '#9B9EAC', fontSize: '14'}} padding={{left: -43, right: -42}}/>
                        <YAxis type="number" dataKey="kilogram" orientation={"right"} tickCount={3} axisLine={false} tickLine={false} tickMargin={45} domain={['dataMin - 2', 'dataMax + 1']} yAxisId="kilogram" tick={{stroke: '#9B9EAC', fontSize: '14'}}/>
                        <YAxis type="number" dataKey="calories" yAxisId="calories" hide={true}/>
                        <Tooltip
                            itemStyle={{fontSize: 7, fontWeight: 500, textAlign: "center", color: "#FFFFFF"}}
                            contentStyle={{border: "none", backgroundColor: "#E60000"}}
                            wrapperStyle={{ outline: 'none', backgroundColor: "#E60000" }}
                            cursor={{
                                strokeWidth: "2px",
                                fill: "rgba(196, 196, 196, 0.5)",
                            }}
                            labelStyle={{display: "none"}}
                            formatter={(v) => [v, null]}
                        />
                        <Legend
                            formatter={formatterLegend}
                            wrapperStyle={{top: 23, fontSize: 14, right: 12}}
                            align={"right"}
                            iconSize={8}
                        />
                        <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} legendType={"circle"} unit={'kg'} radius={[3,3,0,0]}/>
                        <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} legendType={"circle"} unit={'Kcal'} radius={[3,3,0,0]}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }

}