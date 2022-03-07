import React from 'react'

export default function BadBank() {
  return (
    <div class="col-1-of-3">
    <div class="card">
        <div class="card__side card__side--front card__side--front-2">
            <a href="https://github.com/McBride-Ryan/Bad-Bank" target="_blank" rel="noreferrer">
                <div class="card__picture card__picture--2">      
                </div>
                <img src="" class="card__svg-icon" alt="" />
                <h4 class="card__heading" >
                    <span class="card__heading-span--2">
                        Bad Bank
                    </span>
                </h4>
            </a>
            <div class="card__description">
                <p>
                    A client-side rendering banking application storing the data on the DOM.
                </p>
            </div>
            <div class="card__details">
                <ul>
                    <li>Bootstrap</li>
                    <li>React</li>
                    <li>DOM</li>
                    <li>Stateful</li>
                </ul>
                <div className='card__cta'><a href="https://github.com/McBride-Ryan/Bad-Bank" className='card__btn' target="_blank" rel="noreferrer">Source Code</a></div>
            </div>  
        </div>
    </div>
</div>
  )
}
