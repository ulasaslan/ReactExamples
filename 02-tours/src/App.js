import React, {useState, useEffect} from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {

    const [tours, setTours] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false)

    async function getTours() {
        const response = await fetch(url);
        const data = await response.json();
        setTours(data);
        setDataLoaded(true)
    }

    useEffect(() => {
        getTours()
    }, [])

    const removeTour = (id) => {
        setTours(tours.filter(t => t.id != id))
    }

    return (
        <main>
            {dataLoaded &&
                <section>
                    <div className="title">
                        <h2>Our Tours</h2>
                        <div className="underline"></div>

                        <Tours tours={tours} removeTour={removeTour}/>
                    </div>

                </section>
            }
            {!dataLoaded && <Loading/>}
        </main>
    )
}

export default App
