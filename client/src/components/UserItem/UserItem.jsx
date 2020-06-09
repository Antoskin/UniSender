import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import s from './UserItem.module.scss'

function UserItem({user: {id, login, avatar_url, html_url}}) {
    return (
        <Card className={s.card}>
            <Link className={s.link} to={{pathname: `/user:${id}`, username: login}}>
                <Card.Img className={s.avatar} src={avatar_url} />
                <Card.Body>{login}</Card.Body>
            </Link>
            <Link to={`//${html_url}`} target='_blank' className={s.button}>
                Кнопка
            </Link>
        </Card>
    );
}

export default UserItem;