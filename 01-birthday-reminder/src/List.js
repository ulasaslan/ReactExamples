import React, {useState} from 'react';
import Person from "./Person"

const List = (props) => {

    const clear = () => {
        props.clear()
    }

    return (
        <section className="container">
            {props.persons.length == 0 && <h3>No birthday today</h3>}
            {props.persons.length > 0 &&
            <>
                <h3>{props.persons.length} birthdays today</h3>
                {props.persons.map(p => <Person info={p}/>)}
                <button onClick={clear}>Clear All</button>
            </>
            }
        </section>
    );
}
;

export default List;
