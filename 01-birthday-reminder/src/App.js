import React, {useState} from 'react';
import data from './data';
import List from './List';

function App() {

    const [persons, setPersons] = useState(data)

    const clearPersons = () => {
        setPersons([])
    }

    return (
        <main>
            <List persons={persons} clear={clearPersons}/>
        </main>
    )
}

export default App;
