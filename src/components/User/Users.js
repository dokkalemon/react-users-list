import React from 'react';

import UserItem from './UserItem';

import './Users.css'

const Users = (props) => {
    return (
        <section className="users-container">
            <h2>User Registrati</h2>
            {props.userArray.map(el => <UserItem name={el.name} age={el.age} key={el.id}/>)}
        </section>
    )
}

export default Users;