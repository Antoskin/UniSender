import React, {useState, useEffect} from 'react';
import {Spinner} from 'react-bootstrap'
import UserItem from '../UserItem'
import {useHttp} from '../../hooks/useHttp'
import {listUser} from '../../constants'

function UserList() {
    const [users, setUsers] = useState([])
    const {loading, request} = useHttp();

    useEffect(() => {
        async function fetchData() {
            const res = await request(listUser)
            setUsers(res)
        }

        fetchData();
    },[request])

    if (loading) {
        return <Spinner animation="grow" />
    }
    console.log(users)
    return (
        <>
            {users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
        </>
    );
}

export default UserList;