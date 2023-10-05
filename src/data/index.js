export const questiondata = {
    topic: 'Javascript',
    level: 'Beginner',
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question:
          'Which function is used to serialize an object into a JSON string in Javascript?',
        choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'stringify()',
        id:1,
      },
      {
        question:
          'Which of the following keywords is used to define a variable in Javascript?',
        choices: ['var', 'let', 'var and let', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'var and let',
        id:2,

      },
      {
        question:
          'Which of the following methods can be used to display data in some form using Javascript?',
        choices: [
          'document.write()',
          'console.log()',
          'window.alert',
          'All of the above',
        ],
        type: 'MCQs',
        correctAnswer: 'All of the above',
        id:3,

      },
      {
        question: 'How can a datatype be declared to be a constant type?',
        choices: ['const', 'var', 'let', 'constant'],
        type: 'MCQs',
        correctAnswer: 'const',
        id:4,

      },
      {
        question: 'Upon encountering empty statements, what does the Javascript Interpreter do?',
        choices: ['Throws an error','Ignores statements','Give warning','None of above'],
        type: 'MCQs',
        correctAnswer: 'Ignores statements',
        id:5,
      },
      {
        question: 'What keyword is used to check whether a given property is valid or not?',
        choices: ['in','is in','exists','lies'],
        type: 'MCQs',
        correctAnswer: 'in',
        id:6,
      },
      {
        question: 'When an operator’s value is NULL, the typeof returned by the unary operator is:',
        choices: ['Boolean','Undefined','Object','integer'],
        type: 'MCQs',
        correctAnswer: 'Object',
        id:7,
      },
      {
        question: 'What does the Javascript “debugger” statement do?',
        choices: ['It will debug all errors during run time','It acts as a brakpoint in program','It will debug error in current statement if any','All of above'],
        type: 'MCQs',
        correctAnswer: 'It acts as a brakpoint in program',
        id:8
      },
      {
        question: ' Which of the following are closures in Javascript?',
        choices: ['Variables','Objects','Functions','All of above'],
        type: 'MCQs',
        correctAnswer: 'All of above',
        id:9
      },
      {
        question: 'Which of the following is not a Javascript framework?',
        choices: ['Node','React','Vue','Cassandra'],
        type: 'MCQs',
        correctAnswer: 'Cassandra',
        id:10
      },
      {
        question: 'What keyword is used to declare an asynchronous function in Javascript?',
        choices: ['async','await','SetTimeout','None of above'],
        type: 'MCQs',
        correctAnswer: 'async',
        id:11
      },
      {
        question: 'How to stop an interval timer in Javascript?',
        choices: ['ClearInterval','ClearTimer','IntervalOver','None of above'],
        type: 'MCQs',
        correctAnswer: 'ClearInterval',
        id:12
      },
      {
        question: 'What does … operator do in JS?',
        choices: ['It is used to spread iterables to individual elements','it is used to describe datatype of undefined size','No such operator exists','None of above'],
        type: 'MCQs',
        correctAnswer: 'It is used to spread iterables to individual elements',
        id:13
      },
      {
        question: 'Which object in Javascript doesn’t have a prototype?',
        choices: ['Base Object','All objects have prototype','None of objects have prototype','None of above'],
        type: 'MCQs',
        correctAnswer: 'Base Object',
        id:14
      },
      {
        question: 'Which of the following are not server-side Javascript objects?',
        choices: ['Date','FileUpload','Function','All of above'],
        type: 'MCQs',
        correctAnswer: 'All of above',
        id:15
      },
    ],
  }