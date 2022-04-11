import React from 'react';

import './UserItem.css';

const UserItem = (props) => {
    return (
        <section className="user-item-container">
            <p>{props.name} ({props.age} years old)</p>
        </section>
    )

}

export default UserItem;