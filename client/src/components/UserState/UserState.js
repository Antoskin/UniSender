import React, {useEffect, useReducer} from 'react';
import {UserContext} from '../../context'
import {useHttp} from '../../hooks/useHttp'
import {dataUrl, usersPerPage as perPage} from '../../constants'

const initialState = {
    total: 0,
    data: [],
    userPerPage: [],
    activeDot: 1
}

function reducer(state, {type, payload}) {
    switch (type) {
        case 'FETCH_DATA':
            const {data} = payload
            return {
                ...state,
                total: data.length,
                data,
                userPerPage: data.slice(0, perPage)
            }
        case 'CHANGE_PAGE':
            let from = (payload - 1) * perPage
            let to = from + perPage

            return {
                ...state,
                userPerPage: state.data.slice(from, to),
                activeDot: payload
            }
        default:
            return state
    }
}

function UserState({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {loading, request} = useHttp();

    useEffect(() => {
        async function fetchData() {
            const response = await request(dataUrl);
            dispatch({type: 'FETCH_DATA', payload: {data: response}})
        }

        fetchData();
    },[request])

    return (
        <div className="container">
            <UserContext.Provider value={{
                loading: loading,
                users: state.userPerPage,
                onChangePage: dispatch,
                activeDot: state.activeDot,
                total: state.total
            }}>
                {children}
            </UserContext.Provider>
        </div>
    );
}

export default UserState;