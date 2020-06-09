import React, {useEffect, useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Spinner, Card} from 'react-bootstrap'
import {dataUrl} from '../../constants'
import {useHttp} from '../../hooks/useHttp'
import s from './UserCard.module.scss'

function UserCard({location: {username}, history}) {
    const [user, setUser] = useState([])
    const {loading, request} = useHttp()

    useEffect(() => {
        if (!username) {return history.goBack()}

        async function fetchUser() {
            const res = await request(`${dataUrl}/${username}`)
            setUser(res)
        }

        fetchUser()
    }, [request, username, history])

    if (loading) {return <Spinner animation="grow" />}

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

export default withRouter(UserCard);