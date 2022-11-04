import React from 'react'
import icon from "../Images/qmania.jpg"
import "../stylings/header.css"

const Header = () => {
  return (
    <div>
      <header>
        <img src={icon} alt="Quizzo Mania" className="icon" />
        <h1 className="heading">
            Quizzo Mania
        </h1>
        <h3 className="subheading">
            The Ultimate Chennel For Quizz Lovers
        </h3>
      </header>
    </div>
  )
}

export default Header
