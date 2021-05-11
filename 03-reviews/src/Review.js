import React, {useEffect, useState} from 'react';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';
import data from "./data";

const Review = (props) => {

    const [selected, setSelected] = useState(0)
    const [reviews, setReviews] = useState(data)
    let rev = reviews[selected]

    useEffect(() => {
        rev = reviews[selected]
    }, [selected])

    const incSelected = () => {
        setSelected((selected) => {
            return (selected + 1) % (reviews.length)
        })
    }

    const decSelected = () => {
        setSelected((selected) => {
            if (selected === 0)
                return reviews.length - 1
            else
                return selected - 1
        })
    }

    const surprise = () => {
        setSelected(Math.floor(Math.random() * reviews.length))
    }

    return (
        <article className="review">
            <div className="img-container">
                <img className="person-img" src={rev.image} alt={rev.name}/>

            </div>
            <h4 className="author">{rev.name}</h4>
            <p className="job">{rev.job}</p>
            <p className="info">{rev.text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={decSelected}><FaChevronLeft/></button>
                <button className="next-btn" onClick={incSelected}><FaChevronRight/></button>
            </div>
            <button className="random-btn" onClick={surprise}>Surprise me</button>
        </article>
    )
};

export default Review;
