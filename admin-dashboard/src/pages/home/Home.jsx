import React from 'react'
import Charts from '../../components/charts/Charts'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import './home.css'

export default function Home() {
    return (
        <div className='home'>
            <div className="homeTitleContainer">
                <h1 className="userTitle">
                    Home
                </h1>
            </div>
            <FeaturedInfo />
            <Charts />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
