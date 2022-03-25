import React from 'react'

export default function Hero() {
  return (
    <header className='header__container'>
        <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">Ryan McBride</span>
                <span className="heading-primary--sub">Software Engineer</span>
            </h1>

            <a href="#projects" className="btn btn--white btn--animated smooth-goto">See Projects</a>
        </div> 
    </header>
  )
}
