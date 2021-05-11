import React, {useEffect, useState} from 'react';

const Tour = (props) => {

    const [isReadMore, setIsReadMore] = useState(false);
    const [desc, setDesc] = useState(props.t.info)

    useEffect(() => {
        if (isReadMore)
            setDesc(props.t.info)
        else
            setDesc(props.t.info.substring(0,200))
    },[isReadMore])

    const remove = (event) => {
        props.removeTour(props.t.id)
    }

    return (
        <article className="single-tour" >
            <img src={props.t.image} alt={props.t.name}/>
            <footer>
                <div className="tour-info">
                    <h4>{props.t.name}</h4>
                    <h4 className="tour-price">${props.t.price}</h4>
                </div>
                <p>
                    {desc}
                    <button onClick={() => {
                        setIsReadMore(!isReadMore)
                    }}> {isReadMore && "Read less"}{!isReadMore && "Read more"}</button>
                </p>

                <button onClick={remove} className="delete-btn">not interested</button>
            </footer>
        </article>
    )
};

export default Tour;
