import React, { useState, Fragment } from 'react'


function App() {
  const questions = [
    {
      questionText: 'Who is James Bond ?',
      answerOptions: [
        {answerText: 'Some guy running around with a Walther PPK', isCorrect: true},
        {answerText: 'The Queen of England', isCorrect: true},
        {answerText: 'Sean Connery when he was young', isCorrect: false},
        {answerText: 'Do not know', isCorrect: true}
      ]
    },
    {
      questionText: 'Why is James May so slow ?',
      answerOptions: [
        {answerText: 'Because he is a lady', isCorrect: true},
        {answerText: 'He drives like a Hooray Henry', isCorrect: true},
        {answerText: 'Nobody told him that the car has more gears that 1st', isCorrect: false},
        {answerText: 'Do not know', isCorrect: true}
      ]
    },
    {
      questionText: 'Is Elon Musk full of it ?',
      answerOptions: [
        {answerText: 'Yes, certainly', isCorrect: true},
        {answerText: 'He is a really great guy', isCorrect: true},
        {answerText: 'Sure', isCorrect: false}
      ]
    },
    {
      questionText: 'Which company made the best phone ever ?',
      answerOptions: [
        {answerText: 'Huawei', isCorrect: true},
        {answerText: 'Apple', isCorrect: true},
        {answerText: 'Samsung', isCorrect: false},
        {answerText: 'Nokia', isCorrect: true}
      ]
    },
  ]

  return (
    <div className='main'>
      <div className='question'>
        {questions.map(question => 
          <div>
            <h1>{question.questionText}</h1>
            {question.answerOptions.map(answer => <p>{answer.answerText}</p>)}
          </div>)}
      </div>
    </div>


  );
}

export default App;
