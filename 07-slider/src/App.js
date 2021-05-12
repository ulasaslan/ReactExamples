import React, {useState, useEffect} from 'react';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {FaQuoteRight} from 'react-icons/fa';
import data from './data';

function App() {

    const [reviews, setReviews] = useState(data)
    const [article, setArticle] = useState()
    const [selected, setSelected] = useState(0)

    const incSelected = () => {
        setSelected((selected + 1) % reviews.length)
    }


    const decSelected = () => {
        if (selected > 0)
            setSelected(selected - 1)
        else
            setSelected(reviews.length - 1)
    }

    const changeArticle = () => {
        setArticle(
            <article className="activeSlide">
                <img src={reviews[selected].image} alt={reviews[selected].name} className="person-img"/>
                <h4>{reviews[selected].name}</h4>
                <p className="title">{reviews[selected].title}</p>
                <p className="text">{reviews[selected].quote}</p>
                <FaQuoteRight className="icon"/>
            </article>
        )
    }

    useEffect(() => {
        const eff = setInterval(() => {
            incSelected()
        }, 3000)

        changeArticle();

        return () => {
            clearTimeout(eff);

        }
    }, [selected])


    return (<section className="section">
        <div className="title"><h2><span>/</span>reviews</h2></div>
        <div className="section-center">
            {article}
            <button onClick={decSelected} className="prev">
                <FiChevronLeft/>
            </button>
            <button onClick={incSelected} className="next">
                <FiChevronRight/>
            </button>
        </div>
    </section>)
}

export default App;
