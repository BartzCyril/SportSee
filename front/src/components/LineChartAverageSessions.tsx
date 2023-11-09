import {useCallback, useEffect, useRef, useState} from "react";
import {apiFetch} from "../utils/api/api";
import {Rectangle, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {Data} from "../utils/type/type.ts";
import {UserAverageSessions} from "../utils/data/UserAverageSessions.ts";

type CustomCursorProps = {
    w: number,
    h: number,
    x: number
}

function CustomCursor ({w,h,x}: CustomCursorProps) {
    return (
        <Rectangle width={w} height={h} x={x} y={0} opacity="0.2" fill="black"/>
    )
}

type LineChartAverageSessions = {
    id: string
}

export function LineChartAverageSessions({id}: LineChartAverageSessions) {

    const [averageSessionsData, setAverageSessionsData] = useState<Data | null | boolean | undefined>(null)

    const lineChartAverageSessionsRef = useRef<HTMLDivElement>(null)

    const [xCursor, setXCursor] = useState(0)

    const handleChangeXCursor = useCallback(() => {
        if (lineChartAverageSessionsRef.current) {
            const dot = document.querySelector('.recharts-active-dot')
            if (dot) {
                setXCursor(dot.getBoundingClientRect().x - lineChartAverageSessionsRef.current.getBoundingClientRect().x)
            }
        }
        return
    }, [])

    useEffect(() => {
        apiFetch(id, "average-sessions")
            .then(setAverageSessionsData)
            .catch(() => setAverageSessionsData(false))
    }, [id])

    if (averageSessionsData) {
        return (
            <div className="lineChartAverageSessions" ref={lineChartAverageSessionsRef}>
                <h2>Durée moyenne des <br/>sessions</h2>
                <ResponsiveContainer>
                    <LineChart width={258} height={263} data={averageSessionsData instanceof UserAverageSessions ? averageSessionsData.data : undefined} onMouseMove={handleChangeXCursor}>
                        <XAxis dataKey="day" tickLine={false} axisLine={false} stroke="#FFFFFF" opacity={0.5} fontSize={12} fontWeight={500} padding={{left: -14, right: -15}}/>
                        <YAxis domain={['dataMin - 20', 'dataMax + 77.27']} hide={true}/>
                        <Tooltip
                            itemStyle={{fontSize: 8, fontWeight: 500, textAlign: "center", color: "#000000"}}
                            contentStyle={{border: "none", backgroundColor: "white"}}
                            wrapperStyle={{ outline: 'none' }}
                            cursor={
                            lineChartAverageSessionsRef.current ? <CustomCursor w={lineChartAverageSessionsRef.current.clientWidth} h={lineChartAverageSessionsRef.current.clientHeight} x={xCursor}/> : <></>
                            }
                            labelFormatter={() => ''}
                            formatter={(v) => [v + " min", null]}
                        />
                        <Line type="monotone" dataKey="sessionLength" strokeWidth={2} stroke="#FFFFFF" dot={false} opacity={0.5} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
}