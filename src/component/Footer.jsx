import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div class="global-footer">
          <h3>Contact</h3>
          <ul class="footer-list">
            <li class="footer-item">
              <a href="mailto:hp6jsa@gmail.com" target="_blank">메일</a>
            </li>
            <li class="footer-item">
              <a href="tel:15881688" target="_blank">전화</a>
            </li>
            <li class="footer-item">
              <a href="https://www.youtube.com/" target="_blank">유튜브</a>
            </li>
          </ul>
        </div>
      </footer>
  )
}

export default Footer