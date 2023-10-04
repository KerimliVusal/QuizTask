import { useState } from 'react';
import Result from './result';
import {Row,Col} from 'antd';
import { questiondata } from './data';
import '../../App.css'

const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    })

    const { questions } = questiondata
    const { question, choices, correctAnswer } = questions[activeQuestion]

    const onClickNext = () => {
        setSelectedAnswerIndex(null)
        setResult((prev) =>
            selectedAnswer
                ? {
                    ...prev,
                    score: prev.score + 5,
                    correctAnswers: prev.correctAnswers + 1,
                }
                : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
        )
        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion((prev) => prev + 1)
        } else {
            setActiveQuestion(0)
            setShowResult(true)
        }
    }

    const onAnswerSelected = (answer, index) => {
        setSelectedAnswerIndex(index)
        if (answer === correctAnswer) {
            setSelectedAnswer(true)
        } else {
            setSelectedAnswer(false)
        }
    }

    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)
    const reset = () => {
        setActiveQuestion(0)
        setShowResult(false)
        setResult({
            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
        })

    }
    return (<Row className='quizContainer'>
        <Row lg={1} className='backlogo'></Row>
        <Row lg={1} className='backlogo2'></Row>
        <Row lg={1} className='quiz5'>
            <Col lg={12} xs={12}>
                <div >
                    {!showResult ? (
                        <div className="quizContainer">
                            <div >
                                <span className="activeQuestionNo">
                                    {addLeadingZero(activeQuestion + 1)}
                                </span>
                                <span className="totalQuestion">
                                    /{addLeadingZero(questions.length)}
                                </span>
                            </div>
                            <div className='questionh3'>
                                <span className='questionh3' ><h3>{question}</h3></span>
                            </div>

                            <ul>
                                {choices.map((answer, index) => (
                                    <li
                                        onClick={() => onAnswerSelected(answer, index)}
                                        key={answer}
                                        className={
                                            selectedAnswerIndex === index ? 'selectedAnswer' : ""
                                        }
                                    >
                                        {answer}
                                    </li>
                                ))}
                            </ul>
                            <div className="flexRight">
                                <button
                                    onClick={onClickNext}
                                    disabled={selectedAnswerIndex === null}>
                                    {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <Result result={result} reset={reset} />
                    )}
                </div>
            </Col>
        </Row>
    </Row>)
};
export default Quiz