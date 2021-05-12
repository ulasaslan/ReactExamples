import React, {useEffect, useState} from 'react';
import Menu from './Menu';
import Categories from './Categories';
import data from './data';

function App() {
    const [items, setItems] = useState(data)
    const [selected, setSelected] = useState("all")
    const [filteredItems, setFilteredItems] = useState([])

    useEffect(() => {
        if (selected === "all") {
            setFilteredItems(items)
        } else if (selected === "breakfast") {
            setFilteredItems(items.filter(i => i.category === "breakfast"))
        } else if (selected === "lunch") {
            setFilteredItems(items.filter(i => i.category === "lunch"))
        } else if (selected === "shakes") {
            setFilteredItems(items.filter(i => i.category === "shakes"))
        }

    }, [selected])

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Our Menu</h2>
                    <div className="underline"/>
                </div>
                <Categories changeSelected={setSelected}/>
                <Menu items={filteredItems}/>
            </section>
        </main>
    )
}

export default App;
