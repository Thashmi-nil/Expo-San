import React from 'react'
import './charts.css'
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Chart } from "react-google-charts";

export default function Charts() {

    const chart1 = [
        ["Year", "Expenses", "Profit"],
        ["2019", 1000, 400],
        ["2020", 1170, 460],
        ["2021", 660, 1120],
        ["2022", 1030, 540],
    ];
    const chart2 = [
        ["Sales", "Quantity (M)"],
        ["P 01", 11],
        ["P 02", 20],
        ["P 03", 22],
        ["P 04", 27],
        ["P 05", 57],

    ];

    // const data = [
    //     {
    //         name: 'Page A',
    //         uv: 4000,
    //         pv: 2400,
    //         amt: 2400,
    //     },
    //     {
    //         name: 'Page B',
    //         uv: 3000,
    //         pv: 1398,
    //         amt: 2210,
    //     },
    //     {
    //         name: 'Page C',
    //         uv: 2000,
    //         pv: 9800,
    //         amt: 2290,
    //     },
    //     {
    //         name: 'Page D',
    //         uv: 2780,
    //         pv: 3908,
    //         amt: 2000,
    //     },
    //     {
    //         name: 'Page E',
    //         uv: 1890,
    //         pv: 4800,
    //         amt: 2181,
    //     },
    //     {
    //         name: 'Page F',
    //         uv: 2390,
    //         pv: 3800,
    //         amt: 2500,
    //     },
    //     {
    //         name: 'Page G',
    //         uv: 3490,
    //         pv: 4300,
    //         amt: 2100,
    //     },
    // ];


    return (
        <div className='chart'>
            <h3 className="chartTitle">Sales Analytics-2022</h3>
            {/* <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>

                </LineChart>
            </ResponsiveContainer> */}

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '20px' }}>
                <div style={{ width: '500px' }}>
                    <Chart
                        chartType="Line"
                        width="100%"
                        height="400px"
                        data={chart1}
                    />
                </div>

                <div style={{ width: '500px' }}>
                    <Chart
                        chartType="Bar"
                        width="100%"
                        height="400px"
                        data={chart2}
                    />
                </div>
            </div>
        </div>
    )
}