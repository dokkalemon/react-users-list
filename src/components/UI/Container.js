import React from 'react';

import './Container.css';

const Container = (props) => {
    return (
        <section className="container">
            {props.children}
        </section>
    )

}

export default Container;