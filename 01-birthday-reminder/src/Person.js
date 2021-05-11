import React from "react";

const Person = (props) => {
    return (
        <div className="person">
            <img src={props.info.image} alt={props.info.name}/>
            <div>
                <h4>{props.info.name}</h4>
                <p>{props.info.age} years</p>
            </div>
        </div>
    )
}

export default Person