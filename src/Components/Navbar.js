import React, { useEffect, useState } from 'react'

const Nav = () => {
    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])
    return (
        <div className={`nav ${show && 'nav__blue'}`}>

        </div>
    )
}

export default Nav