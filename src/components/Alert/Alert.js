import React from 'react'

import './Alert.css'

const Alert = (props) => {
    return (
        <section className={`alert ${props.constAlert ? ' ' : 'alert-hidden'}`} >
            <div className="alert-container">
                <div className="alert-header">
                    <h1>Invalid input</h1>
                </div>
                <div className="alert-message">
                    <p>{props.children}</p>
                    <button onClick={props.hideAlert}>Done</button>
                </div>
            </div>
        </section>
    ) 
}

export default Alert;