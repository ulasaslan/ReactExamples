import React, {useState, useEffect} from 'react'
import {FaAngleDoubleRight} from 'react-icons/fa'


const url = 'https://course-api.com/react-tabs-project'

function App() {

    const [developers, setDevelopers] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [article, setArticle] = useState()
    const [selected, setSelected] = useState(0)

    const getData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setDevelopers(data)
        setSelected(0)
        setIsLoaded(true)

    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (isLoaded)
            setArticle(
                <article className="job-info"><h3>{developers[selected].title}</h3>
                    <h4>{developers[selected].company}</h4><p
                        className="job-date">{developers[selected].dates}</p>
                    {developers[selected].duties.map(duty => {
                        return (
                            <div className="job-desc">
                                <FaAngleDoubleRight className="job-icon"/>
                                <p>{duty}</p>
                            </div>
                        )
                    })}
                </article>
            )
    }, [selected, isLoaded])


    if (!isLoaded) {
        return (
            <section className="section loading">
                <h1>Loading...</h1>
            </section>
        )
    }

    return (

        <section className="section">
            <div className="title"><h2>Experience</h2>
                <div className="underline"></div>
            </div>
            <div className="jobs-center">
                <div className="btn-container">
                    {
                        developers.map((dev, i) => {
                            return (
                                <button onClick={() => {
                                    setSelected(i)
                                }} id={dev.id} key={dev.id}
                                        className={selected !== i ? 'job-btn' : 'job-btn active-btn'}>{dev.company}</button>
                            )
                        })
                    }

                </div>
                <div>{article}</div>
            </div>
            <button type="button" className="btn">More info</button>
        </section>


    )
}

export default App
