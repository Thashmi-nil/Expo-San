// import React from 'react'
// import './analytics.css'

// export default function Analytics() {
//     return (
//         <div className='analytics'>Analytics</div>
//     )
// }

import React from 'react'
import { Chart } from "react-google-charts";
import './analytics.css'

export default function Analytics() {

    const chart1 = [
        ["Year", "Expenses", "Profit"],
        ["2019", 1000, 400],
        ["2020", 1170, 460],
        ["2021", 660, 1120],
        ["2022", 1030, 540],
    ];
    const chart2 = [
        ["Products", "Quantity (M)"],
        ["P 01", 11],
        ["P 02", 20],
        ["P 03", 22],
        ["P 04", 27],
        ["P 05", 57],

    ];

    const chart1options = {
        title: "Performance",
        subtitle: "Expenses, and Profit: 2019-2022",
    };

    const chart2options = {
        title: "Product Population",
        subtitle: "counts",
    };


    return (
        <div className='analytics'>
            <h1 >Analytics</h1>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '20px' }}>
                <div className='featuredItemAn' style={{ width: '500px' }}>
                    <Chart
                        chartType="AreaChart"
                        width="100%"
                        height="400px"
                        data={chart1}
                        options={chart1options}
                    />
                </div>

                <div className='featuredItemAn' style={{ width: '500px' }}>
                    <Chart
                        chartType="PieChart"
                        width="100%"
                        height="400px"
                        data={chart2}
                        options={chart2options}
                    />
                </div>
            </div>
        </div>
    )
}
