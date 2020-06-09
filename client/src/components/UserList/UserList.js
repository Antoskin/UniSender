import React, {useContext} from 'react'
import {Spinner} from 'react-bootstrap'
import UserItem from '../UserItem'
import Pagination from '../Pagination'
import {UserContext} from '../../context'
import {usersPerPage as perPage} from '../../constants'

function UserList() {
    const {loading, users, total, activeDot, onChangePage} = useContext(UserContext)

    if (loading) {return <Spinner animation="grow" />}

    return (
        <> {users.map(user => (
            <UserItem key={user.id} user={user}  />
        ))}
            <Pagination
                total={total}
                perPage={perPage}
                activeDot={activeDot}
                changePage={onChangePage}
            />
        </>
    );
}

export default UserList
