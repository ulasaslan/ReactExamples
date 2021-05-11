import React, {useState} from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {

    const [questtions, setQuestions] = useState(data)

    return (
        <main>
            <div className="container">
                <h3>Questions and answers about login</h3>
                <section className="info">
                    {questtions.map(q => <SingleQuestion id={q.id} key={q.id} question={q} />)}
                </section>
            </div>

        </main>
    )
}

export default App;
