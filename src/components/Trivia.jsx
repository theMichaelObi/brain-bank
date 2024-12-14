import React, { useEffect, useState } from 'react'

export default function Trivia({ data, setStop, questionNumber, setQuestionNumber, setAnswered }) {

    const [questions, setQuestions] = useState(data);
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");
    const [disabled, setDisabled] = useState(false);

    let answerCount = React.useRef(0);

    //changes the question after the user has answered
    useEffect(() => {
        const randomQuestion = () => {
            if (questions.length === 0) return null;
            const randomIndex = Math.floor(Math.random() * questions.length);
            return questions[randomIndex];
        };
        setQuestion(randomQuestion());
        setDisabled(false);
        setAnswered(false);
    }, [questions, questionNumber, setAnswered]);

    //delay function that sets a delay before an action is called
    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    };

    //handleClick function that handles the logic for the correct and incorrect answer
    const handleClick = (a) => {
        if (disabled) return;

        setSelectedAnswer(a);
        setClassName("answer active");
        setDisabled(true);
        setAnswered(true);
        delay(3000, () => setClassName(a.correct ? "answer correct" : "answer incorrect"));
        delay(15000, () => {
            if (a.correct) {
                setQuestions(prevQuestions => prevQuestions.filter(q => q !== question))
                setQuestionNumber((prev) => prev + 1);
                setSelectedAnswer(null);
                answerCount.current++;
                if (answerCount.current >= 20) {
                    setStop(true);
                }
            } else {
                setStop(true);
            }
            setDisabled(false);
        });
    };

    return (
        <div className="trivia">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((a) => (
                    <div key={a.text} className={selectedAnswer === a ? className : `answer ${disabled ? 'disabled' : ''}`} onClick={() => handleClick(a)}>{a.text}</div>
                ))}
            </div>
        </div>
    );
};