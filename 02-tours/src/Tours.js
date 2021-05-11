import React from 'react';
import Tour from './Tour';

const Tours = (props) => {

    return (
        <div>
            {props.tours.map(t => <Tour id={t.id} key={t.id} t={t} removeTour={props.removeTour}/>)}
        </div>
    )

};

export default Tours;
