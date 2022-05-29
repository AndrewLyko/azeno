import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

import './Question.scss';
import axios from 'axios';

function Question({ id, category, question, answer, updateNextQuestion }) {
    const [toggle, setToggle] = useState(false);

    function handleFlip() {
        setToggle(true);
    }

    function putDate(id, days) {
        axios
            .put(`http://localhost:3010/cards/${id}`, {
                id,
                category,
                question,
                answer,
                answerdate: new Date().setDate(new Date().getDate() + days)
            })
            .then((resp) => {
                console.log(resp.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function handleAnswer(days) {
        setToggle(false);
        putDate(id, days);
        setTimeout(() => {
            updateNextQuestion();
        }, 200);
    }

    return (
        <div className={toggle ? 'flip-card active' : 'flip-card'}>
            <div className="flip-card-inner">
                <div className="flip-card-front" onClick={handleFlip}>
                    <Card>
                        <Card.Header>JavaScript</Card.Header>
                        <Card.Body className="card-body">
                            <Card.Text>{question}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="flip-card-back">
                    <Card>
                        <Card.Header>JavaScript</Card.Header>
                        <Card.Body className="card-body">
                            <Card.Text>{answer}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <div className="answer-btn">
                                <Button
                                    variant="primary"
                                    method="POST"
                                    onClick={() => handleAnswer(7)}
                                >
                                    Wiedziałem
                                </Button>
                                <Button
                                    variant="primary"
                                    method="POST"
                                    onClick={() => handleAnswer(3)}
                                >
                                    Nie byłem pewny
                                </Button>
                                <Button
                                    variant="primary"
                                    method="POST"
                                    onClick={() => handleAnswer(1)}
                                >
                                    Nie wiedziałem
                                </Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Question;
