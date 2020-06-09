import React, {useState, useEffect} from 'react'
import {Spinner} from 'react-bootstrap'
import UserItem from '../UserItem'
import Pagination from '../Pagination'
import {useHttp} from '../../hooks/useHttp'
import {dataUrl, usersPerPage as perPage} from '../../constants'

function UserList() {
    const [total, setTotal] = useState(0)
    const [data, setData] = useState([])
    const [dataPerPage, setDataPerPage] = useState([])
    const [active, setActive] = useState(1)

    const {loading, request} = useHttp();

    useEffect(() => {
        async function fetchData() {
            const res = await request(dataUrl);
            setData(res);
            setTotal(res.length)
        }

        fetchData();
    },[request])

    useEffect(() => {
        let from = (active-1) * perPage
        let to = from + perPage

        const usersPerPage = data.slice(from, to)

        setDataPerPage(usersPerPage)
    }, [data, active])

    if (loading) {
        return <Spinner animation="grow" />
    }

    return (
        <> {dataPerPage.map(user => <UserItem key={user.id} user={user} />)}
            <Pagination
                total={total}
                perPage={perPage}
                active={active}
                setActive={setActive}
            />
        </>
    );
}

export default UserList;