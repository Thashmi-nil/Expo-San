import React from 'react'
import UserList from '../userList/UserList'
import './users.css'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='users'>
            <div className="usersTitleContainer">
                <h1 className="userTitle">
                    Users
                </h1>
                {/* <Link to="/newUser"> */}
                <a href="/newUser">
                    <button className="usersAddButton">
                        Create
                    </button>
                </a>
            </div>
            <UserList />
        </div>
    )
}
