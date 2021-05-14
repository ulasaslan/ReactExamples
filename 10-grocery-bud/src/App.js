import React, {useState, useEffect} from 'react'
import List from './List'
import Alert from './Alert'

function App() {

    const [inVal, setInval] = useState("")
    const [items, setItems] = useState([])
    const [editedIndex, setEditedIndex] = useState(-1)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (editedIndex != -1){
            const temp = [...items]
            temp.splice(editedIndex,1)
            setItems([inVal, ...temp])

            setEditedIndex(-1)

        }else {
            setItems([inVal, ...items])
        }
        setInval("")

    }

    const handleChange = (event) => {
        setInval(event.target.value)
    }

    const removeItem = (index) => {
        const temp = [...items]
        temp.splice(index,1)
        setItems(temp)
    }

    return (
        <section className="section-center">
            <form onSubmit={handleSubmit} className="grocery-form">
                <h3>grocery bud</h3>
                <div className="form-control">
                    <input type="text" className="grocery" value={inVal} onChange={handleChange}
                           placeholder="e.g. eggs"/>
                    <button type="submit" className="submit-btn">Submit</button>
                </div>
            </form>
            <div className="grocery-container">
                <List items={items} setItems={setItems} setEditedIndex={setEditedIndex} setInval={setInval} removeItem={removeItem} />
                {items.length > 0 && <button className="clear-btn" onClick={() => setItems([])  } >clear items</button>}

            </div>
        </section>
    )
}

export default App
