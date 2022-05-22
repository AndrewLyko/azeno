import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

function Question() {
    const [question] = useState('Czy w w JS wszystko jest obiektem?');
    const [answer] = useState(
        'Z technicznego punktu widzenia - nie. Typy proste są opakowywane obiekatmi'
    );

    const [toggle, setToggle] = useState(false);

    function handleAnswer() {
        setToggle(true);
    }

    return (
        <Card onClick={handleAnswer}>
            <Card.Header as="h5">Javascript</Card.Header>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>{!toggle ? question : answer}</Card.Text>
                {toggle && (
                    <div className="d-flex justify-content-between">
                        <Button variant="primary"> Wiedziałem!</Button>
                        <Button variant="primary"> Nie byłem pewny!</Button>
                        <Button variant="primary"> NIe wiedziałem!</Button>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
}

export default Question;
