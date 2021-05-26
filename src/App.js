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
    <div className="wrapper">
      <div className="main">
        <form>
            <div className="section section-basic" id="basic-elements">
                <div className="container">
                    <h3 className="title">Quiz Form</h3>
                    <div className="space-70"></div>

                    {questions.map(question =>
                        <Fragment>
                        <p><strong>{question.questionText}</strong></p>
                        <div className="row" id="checkRadios">
                            <div className="col-xl-8 col-lg-3 mb-4">
                            {question.answerOptions.map(answer => 
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" />
                                        <span className="form-check-sign"></span>
                                        {answer.answerText}
                                    </label>
                                </div>)}
                            </div>
                        </div>
                        </Fragment>)}
                              
                        <button type="submit" class="btn btn-primary ml-0">Submit</button>        
                </div>
            </div> 
        </form>
      </div>
    </div>


  )
}

export default App;
