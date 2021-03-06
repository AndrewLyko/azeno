import React, { useEffect, useState } from 'react';
import Question from '../Question/Question';
import { useParams } from 'react-router-dom';

function QuestionList() {
    const [questions, setQuestions] = useState([]);
    const [question, setQuestion] = useState(null);
    const params = useParams();

    useEffect(() => {
        getDeck(params.id).then((data) => setQuestions(data));
    }, []);

    useEffect(() => {
        updateNextQuestion();
    }, [questions]);

    function updateNextQuestion() {
        if (questions.length) {
            const id = Math.round(Math.random() * (questions.length - 1));
            const q = questions[id];
            // setQuestions(questions.filter(e => e !== q))
            setQuestion(q);
        }
    }

    async function getDeck(id) {
        const url = 'http://localhost:3010';
        const endpoint = 'decks';
        const response = await fetch(`${url}/${endpoint}/${id}/cards`);

        return await response.json();
    }

    return (
        <div>
            {!question ? (
                <h2>Loading..</h2>
            ) : question.answerdate <= Date.parse(new Date()) ? (
                <Question
                    id={question.id}
                    category={question.category}
                    question={question.question}
                    answer={question.answer}
                    updateNextQuestion={updateNextQuestion}
                />
            ) : (
                <h2>Paweł, jestem programistę, dej 20k</h2>
            )}
        </div>
    );
}

export default QuestionList;
