import React from 'react';

import './AddUser.css'

const AddUser = (props) => {
    return (
        <section className="add-user">
            <form onSubmit={props.saveUserHandler}>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" placeholder="Inserisci il nome" onChange={(props.setNameHandler)} value={props.nameValue}/>
                <label htmlFor="name">Età</label>
                <input type="text" id="name" placeholder="Inserisci l'età" onChange={props.setAgeHandler} value={props.ageValue}/>
                <input type="submit" value="Salva"/>
            </form>


        </section>
    )
}

export default AddUser;