import React, { useEffect, useState } from 'react'
import ryan from "../img/profile.png"
import resume from "../docs/RyanMcBride.pdf"
// import resume from "../img/RyanMcbride.pdf"

const Nav = () => {
    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    const [content, setContent] = useState(false)
    const controlContent = () => {
        if (window.scrollY > 100) {
            setContent(true)
        } else {
            setContent(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', controlContent)
        return () => {
            window.removeEventListener('scroll', controlContent)
        }
    }, [])

    return (
        <nav className={`nav ${show && 'nav__blue'} `}>
        <div className={`content__hide ${content && 'container'} `} >
                    <img 
                        src={ryan} alt='Ryan McBride'
                        style={{ height:"50px",
                        width: "50px",
                        borderRadius: "50%",
                        margin: "1rem", }} 
                    />
                    <div className="nav-menu">
                        <a href="/" className='nav-links'>Home</a>
                        <a href="https://github.com/McBride-Ryan" className='nav-links'>GitHub</a>
                        <a href="https://www.linkedin.com/in/ryan-mcbride-50b242218/" className='nav-links'>LinkedIn</a>
                        <a href={resume} download="McBride" className='nav-links'>Resume</a>
                        {/* <a href="/" className='nav-links'>Contact</a> */}
                    </div>

                    {/* <button className='hamburger'>
                        <span></span>
                        <span></span>
                        <span></span>    
                    </button> */}
                
            </div>
        
        </nav>
    )
}

export default Nav