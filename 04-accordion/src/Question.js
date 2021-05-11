import React, {useState} from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

const Question = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const openQuestion = () => {
        setIsOpen(isOpen => setIsOpen(!isOpen))
    }

    return (
        <article className="question">
            <header>
                <h4>{props.question.title}</h4>
                <button onClick={openQuestion} className="btn">{!isOpen && <AiOutlinePlus/>}{isOpen &&
                <AiOutlineMinus/>}</button>
            </header>
            {isOpen && <p>{props.question.info}</p>}
        </article>
    )
};

export default Question;
