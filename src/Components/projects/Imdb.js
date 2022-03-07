import React from 'react'

export default function Imdb() {
  return (
    <div class="col-1-of-3">
        <div class="card">
            <div class="card__side card__side--front card__side--front-1">
                <a href="https://github.com/McBride-Ryan/IMDB-Clone" target="_blank" rel="noreferrer">
                    <div class="card__picture card__picture--1">      
                    </div>
                    <img src="" class="card__svg-icon" alt="" />
                    <h4 class="card__heading" >
                        <span class="card__heading-span--1">
                            IMDB CLONE
                        </span>
                    </h4>
                </a>
                <div class="card__description">
                    <p>
                        A fullstack movie application with authentication and TMDB API requests.
                    </p>
                </div>
                <div class="card__details">
                    <ul>
                        <li>PHP</li>
                        <li>Laravel</li>
                        <li>Livewire</li>
                        <li>MySQL</li>
                    </ul>
                    <div className='card__cta'><a href="https://github.com/McBride-Ryan/IMDB-Clone" className='card__btn' target="_blank" rel="noreferrer">Source Code</a></div>
                </div>  
            </div>
        </div>
    </div>
  )
}
