import React from 'react'
import react from '../img/react.png'
import js from '../img/javascript.png'
import php from '../img/php.png'

export default function Callout() {
  return (
    <div>
        <section className='about'>
            <div className="u-center-text u-margin-bottom-big">
                <h2 className='heading-secondary'>
                    Front End Concentrated
                    <br></br>
                    Full Stack Experience
                </h2>
            </div>

            <div class="row">
                <div class="col-1-of-2">
                    <h3 class="heading-tertiary u-margin-bottom-small">Motivated To Produce Results</h3>
                    <p class="paragraph">
                        As a persistent self-motivated learner, I use the fundementals and discipline to refine my craft: 
                        <br></br>
                        <br></br><i>"If you get one percent better each day for one year, you'll end up thirty-seven times better by the time you are done."</i><br></br><br></br>-- Atomic Habits (James Clear, 2018)
                    </p>
                    <h3 class="heading-tertiary u-margin-bottom-small">An Agile Collaborator</h3>
                    <p class="paragraph">
                        I have worked as a Professional Software Engineer, and collaborated with NBC, FOX, and Showtime as an SAG/AFTRA Union Member.  
                    </p>

                </div>
                <div class="col-1-of-2">
                    <div class="composition">
                        <img src={js} alt="JS" class="composition__photo composition__photo--p1" />
                        <img src={php} alt="Node" class="composition__photo composition__photo--p3" />
                        <img src={react} alt="React" class="composition__photo composition__photo--p2" />
                    </div>
                </div>
            </div>

        </section>
    </div>
  )
}