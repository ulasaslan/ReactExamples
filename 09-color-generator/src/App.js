import React, {useState} from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

    const [inVal, setInVal] = useState("")
    const [colors, setColors] = useState([])
    const [error, setError] = useState(false)

    const handleValChange = (event) => {
        setInVal(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        try {
            let colorList = new Values(inVal).all(10)
            const list = []
            list.push(colorList.map((c,i) => {


                return <SingleColor weight={c.weight} rgb={c.rgb}  index={i} hexColor={c.hex} id={i} key={i}/>
            }))
            setColors(list)
            setError(false)
        } catch (error) {
            setError(true)
            console.log(error)
        }
    }
    return (
        <React.Fragment>
            <section className="container">
                <h3>color generator</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="#f15025" onChange={handleValChange} value={inVal} className={`${error ? 'error' : null}`}/>
                    <button className="btn" type="submit">submit</button>
                </form>
            </section>
            <section className="colors">
                {colors}
            </section>
        </React.Fragment>
    )
}

export default App
