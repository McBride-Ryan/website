import React from 'react'

export default function Atomic() {
  return (
    <div class="col-1-of-3">
        <div class="card">
            <div class="card__side card__side--front card__side--front-3">
                <a href="https://github.com/McBride-Ryan/Atomic-Habits/tree/master" target="_blank" rel="noreferrer">
                <div class="card__picture card__picture--3">      
                </div>
                
                <img src="" class="card__svg-icon" alt="" />
                
                <h4 class="card__heading" >
                    <span class="card__heading-span--3">
                        Atomic Habits
                    </span>
                </h4>
                </a>
                <div class="card__description">
                    <p>
                        A mock full-stack Habit Tracker using React. Using JSON as data storage. 
                    </p>
                </div>
                <div class="card__details">
                    <ul>
                        <li>React</li>
                        <li>JSX</li>
                        <li>REST API</li>
                        <li>MongoDB</li>
                    </ul>
                    <div className='card__cta'><a href="https://github.com/McBride-Ryan/Atomic-Habits/tree/master" className='card__btn' target="_blank" rel="noreferrer">Source Code</a></div>
                </div>  
            </div>
        </div>
    </div>
  )
}
