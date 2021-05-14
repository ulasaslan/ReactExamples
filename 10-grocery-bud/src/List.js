import React from 'react'
import {FaEdit, FaTrash} from 'react-icons/fa'

const List = ({items, setItems, setEditedIndex, setInval, removeItem}) => {

    const editItem = (index) => {
        const edited = items[index]
        setEditedIndex(index)
        setInval(edited)
    }

    return (
        <div className="grocery-list">
            {
                items.map((item,i) => {
                    return <article id={i} key={i} className="grocery-item">
                        <p className="title">{item}</p>
                        <div className="btn-container">
                            <button type="button" className="edit-btn" onClick={()=> editItem(i)}><FaEdit/></button>
                            <button type="button" className="delete-btn" onClick={() => removeItem(i)}><FaTrash/></button>
                        </div>
                    </article>
                })
            }

        </div>
    )
}

export default List
