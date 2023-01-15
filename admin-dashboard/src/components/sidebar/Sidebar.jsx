import React, { useState, useEffect } from 'react'
import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
// import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
// import { Link } from 'react-router-dom';

export default function Sidebar() {
    // const [isActive1, setIsActive1] = useState(false);
    // const [isActive2, setIsActive2] = useState(false);

    const [comp, setComp] = useState('');

    // useEffect(() => {
    //     // setIsActive1(JSON.parse(window.localStorage.getItem('isActive1')));
    //     setIsActive2(JSON.parse(window.localStorage.getItem('isActive2')));
    //     // setComp(JSON.parse(window.localStorage.getItem('comp')));
    //     console.log(isActive1);
    // }, []);

    useEffect(() => {
        window.localStorage.setItem('comp', comp);
    }, [comp]);

    const handleClick = (event) => {
        console.log(event);
        setComp(event);
    };

    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Dashboard
                    </h3>
                    <ul className="sidebarList">
                        {/* <Link to="/" className="link"> */}
                        <a href='/' className='itemLinks' >
                            <li className={window.localStorage.getItem('comp') === 'home' ? "sidebarListItem active" : "sidebarListItem"} onClick={() => handleClick('home')}>
                                <LineStyleIcon className="sidebarIcon" />Home
                            </li>
                        </a>
                        {/* <Link to="/analytics" className="link"> */}
                        <a href='/analytics' className='itemLinks'>
                            <li className={window.localStorage.getItem('comp') === 'analytics' ? "sidebarListItem active" : "sidebarListItem"} onClick={() => handleClick('analytics')}>
                                <TimelineIcon className="sidebarIcon" />Analytics
                            </li>
                        </a>

                        {/* <Link to="/sales" className="link"> */}
                        <a href='/sales' className='itemLinks'>
                            <li className={window.localStorage.getItem('comp') === 'sales' ? "sidebarListItem active" : "sidebarListItem"} onClick={() => handleClick('sales')}>
                                <TrendingUpIcon className="sidebarIcon" />Sales
                            </li>
                        </a>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        {/* <Link to="/users" className="link"> */}
                        <a href='/users' className='itemLinks'>
                            <li className={window.localStorage.getItem('comp') === 'users' ? "sidebarListItem active" : "sidebarListItem"} onClick={() => handleClick('users')}>
                                <PermIdentityIcon className="sidebarIcon" />
                                Users
                            </li>
                        </a>
                        {/* <Link to="/products" className="link"> */}
                        <a href='/products' className='itemLinks'>
                            <li className={window.localStorage.getItem('comp') === 'products' ? "sidebarListItem active" : "sidebarListItem"} onClick={() => handleClick('products')}>
                                <StorefrontIcon className="sidebarIcon" />
                                Products
                            </li>
                        </a>
                        {/* <Link to="/transactions" className="link"> */}
                        <a href='/transactions' className='itemLinks'>
                            <li className={window.localStorage.getItem('comp') === 'transactions' ? "sidebarListItem active" : "sidebarListItem"} onClick={() => handleClick('transactions')}>
                                <AttachMoneyIcon className="sidebarIcon" />
                                Transactions
                            </li>
                        </a>
                        {/* <Link to="/reports" className="link"> */}
                        <a href='/reports' className='itemLinks'>
                            <li className={window.localStorage.getItem('comp') === 'reports' ? "sidebarListItem active" : "sidebarListItem"} onClick={() => handleClick('reports')}>
                                <BarChartIcon className="sidebarIcon" />
                                Reports
                            </li>
                        </a>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        {/* <Link to="/mails" className="link"> */}
                        <a href='/mails' className='itemLinks'>
                            <li className={window.localStorage.getItem('comp') === 'mails' ? "sidebarListItem active" : "sidebarListItem"} onClick={() => handleClick('mails')}>
                                <MailOutlineIcon className="sidebarIcon" />
                                Mail
                            </li>
                        </a>
                        {/* <Link to="/feedback" className="link"> */}
                        <a href='/feedback' className='itemLinks'>
                            <li className={window.localStorage.getItem('comp') === 'feedback' ? "sidebarListItem active" : "sidebarListItem"} onClick={() => handleClick('feedback')}>
                                <DynamicFeedIcon className="sidebarIcon" />
                                Feedback
                            </li>
                        </a>
                        {/* <Link to="/messages" className="link"> */}
                        <a href='/messages' className='itemLinks'>
                            <li className={window.localStorage.getItem('comp') === 'messages' ? "sidebarListItem active" : "sidebarListItem"} onClick={() => handleClick('messages')}>
                                <ChatBubbleOutlineIcon className="sidebarIcon" />
                                Messages
                            </li>
                        </a>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        {/* <Link to="/manage" className="link"> */}
                        <a href='/manage' className='itemLinks'>
                            <li className={window.localStorage.getItem('comp') === 'manage' ? "sidebarListItem active" : "sidebarListItem"} onClick={() => handleClick('manage')}>
                                <WorkOutlineIcon className="sidebarIcon" />
                                Manage
                            </li>
                        </a>
                        {/* <Link to="/systemLog" className="link"> */}
                        <a href='/systemLog' className='itemLinks'>
                            <li className={window.localStorage.getItem('comp') === 'systemLog' ? "sidebarListItem active" : "sidebarListItem"} onClick={() => handleClick('systemLog')}>
                                <TimelineIcon className="sidebarIcon" />
                                System Log
                            </li>
                        </a>
                        {/* <li className="sidebarListItem">
                            <ReportGmailerrorredIcon className="sidebarIcon" />
                            Settings
                        </li> */}
                    </ul>
                </div>
            </div>

        </div>
    )
}
