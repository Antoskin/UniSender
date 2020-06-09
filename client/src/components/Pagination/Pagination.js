import React from 'react'
import {default as P} from 'react-bootstrap/Pagination'

function Pagination({total, perPage, active, setActive}) {

    const btnAmount = Math.floor(total / perPage)

    let dots = [];
    for (let num = 1; num <= btnAmount; num++) {
        dots.push(
            <P.Item
                key={num}
                active={num === active}
                onClick={() => setActive(num)}>
                {num}
            </P.Item>
        )
    }

    return <P size="sm">{dots}</P>
}

export default Pagination;