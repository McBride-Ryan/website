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

            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">Motivated To Produce Results</h3>
                    <p className="paragraph">
                        As a persistent self-motivated learner, I use the fundementals and discipline to refine my craft: 
                        <br></br>
                        <br></br><i>"If you get one percent better each day for one year, you'll end up thirty-seven times better by the time you are done."</i><br></br><br></br>-- Atomic Habits (James Clear, 2018)
                    </p>
                    <h3 className="heading-tertiary u-margin-bottom-small">A Reliable Collaborator</h3>
                    <p className="paragraph">
                        I have worked as a Professional Software Engineer, and collaborated with NBC, FOX, and Showtime as an SAG/AFTRA Union Member.  
                    </p>

                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img src={js} alt="JS" className="composition__photo composition__photo--p1" />
                        <img src={php} alt="Node" className="composition__photo composition__photo--p3" />
                        <img src={react} alt="React" className="composition__photo composition__photo--p2" />
                    </div>
                </div>
            </div>

        </section>
    </div>
  )
}
