import React, {useEffect, useState} from 'react';
import {Spinner, Card} from 'react-bootstrap'
import {listUser} from '../../constants'
import {useHttp} from '../../hooks/useHttp'
import s from './UserCard.module.scss'
import {Link} from "react-router-dom";

function UserCard({location: {username}}) {
    const [user, setUser] = useState([])
    const {loading, request} = useHttp()

    useEffect(() => {
        async function fetchUser() {
            const res = await request(`${listUser}/${username}`)
            setUser(res)
        }

        fetchUser()
    }, [request, username])

    if (loading) {
        return <Spinner animation="grow" />
    }

    return (
        <Card>
            <Card.Img className={s.avatar} variant="left" src={user.avatar_url} />
            <Card.Body>
                <Card.Title className={s.name}>{user.name}</Card.Title>
                <Card.Text  className={s.location}>{user.location}</Card.Text>
                <Card.Text className={s.date}>from {user.created_at}</Card.Text>
                <Link to='/'>back</Link>
            </Card.Body>
        </Card>
    );
}

export default UserCard;