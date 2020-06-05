import React from 'react'
import {Card, Button} from "react-bootstrap"
import s from './UserItem.module.scss'

function UserItem({user: {id, login, avatar_url}}) {
    return (
        <Card className={s.card}>
            <Card.Img className={s.avatar} src={avatar_url} />
            <Card.Body>{login}</Card.Body>
            <Button className={s.button}>Кнопка</Button>
        </Card>
    );
}

export default UserItem;