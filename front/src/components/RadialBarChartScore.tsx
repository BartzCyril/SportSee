import {PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer} from "recharts";
import {useEffect, useState} from "react";

type RadialBarChartScoreProps = {
    value: {score: number} | undefined
}

export function RadialBarChartScore({value}: RadialBarChartScoreProps) {

    const [barWidth, setBarWidth] = useState(100)
    const [barX, setBarX] = useState(0)
    const [barY, setBarY] = useState(0)
    const barSize = 10

    useEffect(() => {

        const allResize = (radialBar: SVGPathElement | null) => {
            setBarWidth(radialBar!.getClientRects()[0].width - (barSize * 2));
            setBarY(radialBar!.getClientRects()[0].y + barSize)
            setBarX(radialBar!.getClientRects()[0].x + barSize)
        }

        const handleResizeMomentT = setTimeout(() => {
            const radialBar = document.querySelector<SVGPathElement>('.recharts-radial-bar-background-sector');
            allResize(radialBar)
        }, 1000)

        const handleResize = () => {
            const radialBar = document.querySelector<SVGPathElement>('.recharts-radial-bar-background-sector');
            allResize(radialBar)
        };

        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
            window.clearTimeout(handleResizeMomentT)
        }
    }, []);

    return (
        <div className="radialBarChartScore">
            <h2>Score</h2>
            <p style={{width: `${barWidth}px`, height: `${barWidth}px`, top: `${barY}px`, left: `${barX}px`, display: barX === 0 ? 'none' : ''}}>{value?.score}% <span>de votre <br/>objectif</span></p>
            <ResponsiveContainer>
                <RadialBarChart width={258} height={263} innerRadius="66%" barSize={barSize} startAngle={90} endAngle={450} data={[value]} margin={{top: 44}}>
                    <RadialBar dataKey="score" cornerRadius={100} fill="rgba(255, 0, 0, 1)" background={{fill: "#fbfbfb"}}/>
                    <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}