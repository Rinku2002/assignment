import React from 'react'
import Questions from '../questions/questions'
import './quiz.css'

function Quiz() {
  return (
    <div className='mw pt-5'>
        <h1 className='text-center'>Preview Screening questions</h1>
        <p className='text-center text-secondary'>Narrow down your candidates</p>
        <p>Sample Title</p>

        <Questions/>
    </div>
  )
}

export default Quiz