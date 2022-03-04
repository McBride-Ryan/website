import React from 'react'

export default function Hero() {
  return (
    <header className='header__container'>
        <div class="header__text-box">
            <h1 class="heading-primary">
                <span class="heading-primary--main">Ryan McBride</span>
                <span class="heading-primary--sub">Software Developer</span>
            </h1>

            <a href="#projects" class="btn btn--white btn--animated smooth-goto">See Projects</a>
        </div> 
    </header>
  )
}
