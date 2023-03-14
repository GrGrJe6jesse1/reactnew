import React from 'react'
import apple from './1a2cf82c9a60d6.png'
import './Header.css'

const Header = () => {
  return (
    <header>
        <nav>
          <h1 className="logo">
            <a href="">
              <img className='sagwa' src={apple} alt="logo" />
            </a>
          </h1>
          <h2 className='visually-hidden'>메뉴</h2>
          <ul className="gnb-list">
            <li className="gnb-item"><a href="">menu1</a></li>
            <li className="gnb-item"><a href="">menu2</a></li>
            <li className="gnb-item"><a href="">menu3</a></li>
          </ul>
        </nav>
      </header>
  )
}

export default Header