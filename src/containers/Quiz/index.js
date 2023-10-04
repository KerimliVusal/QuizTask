import { useState } from 'react';
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
  
    const { questions } = questiondata
    const { question, choices, correctAnswer } = questions[activeQuestion]
  
    
    return(<div className='Container'>
        <Row lg={1}  className='backlogo'></Row>
        <Row lg={1}  className='backlogo2'></Row>
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
          <Row lg={1}>
            <Col className='questionh3' xs={12}><h3>{question}</h3></Col>
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
          <div className="flex-right">
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}>
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
     <Result result={result} reset={reset}/>
      )}
    </div>
            </Col>
        </Row>
    </div>)
};
export default Quiz