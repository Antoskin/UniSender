import React from 'react'
import {default as P} from 'react-bootstrap/Pagination'

function Pagination({total, perPage, activeDot, changePage}) {

    const btnAmount = Math.floor(total / perPage)

    let dots = [];
    for (let num = 1; num <= btnAmount; num++) {
        dots.push(
            <P.Item
                key={num}
                active={num === activeDot}
                onClick={() => changePage({type: 'CHANGE_PAGE', payload: num})}>
                {num}
            </P.Item>
        )
    }

    return <P size="sm" className="mt-4 d-flex justify-content-center">{dots}</P>
}

export default Pagination;