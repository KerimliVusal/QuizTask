import { useEffect, useState } from 'react';
import { Row, Col } from 'antd'
import Result from '../../components/Result/result';
import { questiondata } from '../../data';
import '../../App.css'

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [shows, setShow] = useState(false)
  const [returnBack, setReturnBack] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })
  const [seconds, setSeconds] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const { questions } = questiondata
  const { question, choices, correctAnswer, id } = questions[activeQuestion]


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

    return () => {
      clearInterval(timerInterval);
    };
  }, [isTimerRunning, seconds]);


  const onClickNext = () => {
    setSelectedAnswerIndex(null)
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      const correctAnswers = selectedAnswers.filter(item => item.isCorrect === true)?.length
      const wrongAnswers = selectedAnswers.filter(item => item.isCorrect === false)?.length
      const percentageScore = questions?.length === 0 ? 0 : ((correctAnswers / questions?.length)?.toFixed(2)) * 100;
      setActiveQuestion(0)
      setShowResult(true)
      setIsTimerRunning(false)
      setResult({
        score:percentageScore ,
        correctAnswers: correctAnswers,
        wrongAnswers: wrongAnswers,
      })

    }

  }
  const onClickBack = () => {
    setSelectedAnswerIndex(prev => prev - 1)
    if (activeQuestion >= 1) {
      setActiveQuestion((prev) => prev - 1)
    }
  }

  const onAnswerSelected = (answer, index) => {
    const existingAnswerIndex = selectedAnswers.findIndex(item => item.id === id);

    if (existingAnswerIndex !== -1) {
      setSelectedAnswers(prev => {
        const updatedAnswers = [...prev];
        updatedAnswers[existingAnswerIndex] = { index: index, id: id, isCorrect: answer === correctAnswer, }
        return updatedAnswers;
      });
    } else {
      // Add new entry
      setSelectedAnswers(prev => [
        ...prev,
        { id: id, isCorrect: answer === correctAnswer, index: index }
      ]);
    }
    setSelectedAnswerIndex(index);

    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };
  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)
  const reset = () => {
    setActiveQuestion(0)
    setShowResult(false)
    setShow(false)
    setSeconds(60)
    setSelectedAnswers([])
    setIsTimerRunning(true)
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    })

  }
  const show = () => {
    setShow(true)
    setActiveQuestion(0)
    setShowResult(false)
  }
  return (<div className=''>
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
          <Row className='backlogo2'></Row>

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
                    className={`${shows
                        ? selectedAnswers.find((item) => item.id === id)?.index === index
                          ? selectedAnswers.find((item) => item.id === id)?.isCorrect
                            ? 'selectedAnswer'
                            : 'incorrect'
                          : ''
                        : returnBack || selectedAnswers.find((item) => item.id === id)?.index === index
                          ? 'selectedAnswer'
                          : ''
                      }`}
                  >
                    <span>
                      {answer}
                    </span>
                    {shows && selectedAnswers.find((item) => item.id === id)?.index === index ? (
                      <span
                        className={`correctAnswer ${selectedAnswers.find((item) => item.id === id)?.isCorrect ? 'correct' : 'falsed'
                          }`}
                      >
                        {selectedAnswers.find((item) => item.id === id)?.isCorrect ? ' ✓' : ' ✗'}
                      </span>
                    ) : null}
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
                  disabled={activeQuestion === 0}

                >
                  {'Back'}
                </button>
                <button
                  onClick={onClickNext}
                  disabled={selectedAnswers.find(item => item.id === activeQuestion + 1) ? false : true}
                >
                  {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                </button>
              </div>
            </div></Col>
        </Row>
      </div>
    </>) : (
      <Result result={result} reset={reset} show={show} />
    )}
  </div>
  )
};
export default Quiz