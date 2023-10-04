import { useEffect, useState } from 'react';
import { Row, Col } from 'antd'
import Result from  '../../components/Result/result';
import { questiondata } from '../../data';
import '../../App.css'

const Quiz=()=>{
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [result, setResult] = useState({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    })
    const [seconds, setSeconds] = useState(60);
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const { questions } = questiondata
    const { question, choices, correctAnswer } = questions[activeQuestion]
   

  useEffect(() => {
    let timerInterval;

    const startTimer = () => {
      timerInterval = setInterval(() => {
        if (seconds === 0) {
          clearInterval(timerInterval);
          setIsTimerRunning(false);
          setShowResult(true)
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    };

    if (isTimerRunning) {
      startTimer();
    } else {
      clearInterval(timerInterval);
    }

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(timerInterval);
    };
  }, [isTimerRunning, seconds]);
   
  
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
    const onClickBack = () => {
       setSelectedAnswerIndex(prev=>prev-1)
      setResult((prev) =>
        selectedAnswer
          ? {
              ...prev,
              score: prev.score + 5,
              correctAnswers: prev.correctAnswers + 1,
            }
          : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
      )
      if (activeQuestion !== questions.length - 1&&activeQuestion>=1) {
        setActiveQuestion((prev) => prev -1)
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
    const reset=()=>{
        setActiveQuestion(0)
        setShowResult(false)
        setSeconds(60)
        setIsTimerRunning(true)
        setResult({
            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
          })

    }
    return(<div className=''>
          {!showResult ? (<>
          <div className='quizContainer'>
          <Row >
            <Col className='questionHeader'>
           <h2>Awesome Quiz Application</h2>
           <span className='questionCounter'><span className='questionCounter1'>Time left</span><span className='questionCounter2'>{`${seconds}`}</span></span>
           </Col>
          </Row>
             <Col >
             
        <Row className='backlogo'></Row>
        <Row   className='backlogo2'></Row>
     
        <Row>
          <Col>
          <Row >
            <Col className='questionh3'><h3>{question}</h3></Col>
          </Row>
          
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
          </Col> 
          
          </Row>
          
     
            </Col>
            <Row>
              <Col className="quizFooter">
              <div className="quizFooterRow">
            <div className="quizFooterRow2">
          <span >
              {`${addLeadingZero(activeQuestion + 1)} of `}
            </span>
            <span >
              {`${addLeadingZero(questions.length)} Questions`}
            </span>
            </div>
            <div className='submitButton'>
            <button
              onClick={onClickBack}
              >
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Back'}
            </button>
            <button
              onClick={onClickNext}
             >
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
            </div>
          </div></Col>
            </Row>
            </div>
            </> ) : (
     <Result result={result} reset={reset}/>
      )}
        </div>
    )
};
export default Quiz