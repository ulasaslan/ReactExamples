import React from 'react'

const SingleColor = ({weight, rgb,  index,hexColor }) => {
    const bcg = rgb.join(',')
    const hexValue = `#${hexColor}`


    return (
        <article
            className={`color ${index > 10 && 'color-light'}`}
            style={{ backgroundColor: `rgb(${bcg})` }}
            onClick={() => {
                navigator.clipboard.writeText(hexValue)
            }}
        >
            <p className='percent-value'>{weight}%</p>
            <p className='color-value'>{hexValue}</p>
        </article>
    )
}

export default SingleColor
