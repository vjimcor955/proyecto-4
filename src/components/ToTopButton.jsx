import React, { useState, useEffect } from 'react'

const ToTopButton = () => {
  const [toTopButton, setToTopButton] = useState(false)
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setToTopButton(true)
      } else {
        setToTopButton(false)
      }
    })
  }, []);
    
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  } 

  return (
    toTopButton && (
      <button className="to__top" onClick={scrollToTop}> <img src="./flecha_arriba.png" alt="flecha arriba" /> </button>
    )
  )
}

export default ToTopButton;