import React, {useState} from 'react';
import data from './data';

function App() {

    const [sample, setSample] = useState(data)
    const [paragraphs, setParagraphs] = useState([])
    const [val, setVal] = useState(0)

    const valChangeHandler = event => {
        setVal(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const generated = []
        for (let i=0; i<val; i++){
            generated.push(<p>{sample[i % sample.length]}</p>)
        }
        setParagraphs(generated)
    }

    return (
        <section className="section-center" onSubmit={handleSubmit}>
            <h3>Tired of boring lorem ipsum?</h3>
            <form className="lorem-form">
                <label htmlFor="amount">Paragraphs:</label>
                <input type="number" name="amount" id="amount" value={val} onChange={valChangeHandler} />
                <button className="btn" type="submit">Generate</button>
            </form>
            <article className="lorem-text">{paragraphs}</article>
        </section>

    )
}

export default App;
