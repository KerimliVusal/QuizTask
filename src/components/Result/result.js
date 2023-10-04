import { Row, Col } from 'antd'
import { questiondata } from "../../data/index"

const Result = ({ result, reset }) => {
    const { questions } = questiondata

    return (<>
       <Row className='resultrow '>
  <Col>
    <Row >
      <Col className='resultHeader'>
        <h2>Result</h2>
      </Col>
    </Row>

    <Row>
      <Col>
        <p className='resultrow1'>
          <span>Total Question:</span> <span>{questions.length}</span>
        </p>
      </Col>
    </Row>

    <Row>
      <Col>
        <p className='resultrow1'>
          <span>Total Score:</span> <span>{result.score}</span>
        </p>
      </Col>
    </Row>

    <Row>
      <Col>
        <p className='resultrow1'>
          <span>Correct Answers:</span> <span>{result.correctAnswers}</span>
        </p>
      </Col>
    </Row>

    <Row>
      <Col>
        <p className='resultrow1'>
          <span>Wrong Answers:</span> <span>{result.wrongAnswers}</span>
        </p>
      </Col>
    </Row>

    <Row>
      <Col className='Resultbutton' >
        <button onClick={() => reset()}>Reset</button>
      </Col>
    </Row>
  </Col>
</Row>
    </>
    )
}; export default Result