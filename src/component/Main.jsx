import React from 'react'
import './main.css'
import back from './back.jpeg'

const main = () => {
  return (
    <div className='main-wrapper'>
      <section className='background' style={
        {
          backgroundImage : `url(${back})`,
          height : '600px',
          backgroundRepeat : 'no-repeat',
          backgroundPosition : 'center',
          backgroundSize : 'cover'
        }
        }>
          <div className="front-txt">
            <h2 className="front-title">Lorem ipsum dolor sit.</h2>
            <p className="front-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Eos et sit officia impedit, <br/>
              maiores quo aut minima numquam unde iste porro? 
              Dignissimos aut corrupti corporis nesciunt iure voluptates quasi mollitia?
            </p>
            <button className='front-btn' type='button' onClick>버튼</button>
          </div>
      </section>
      <section className="top">
        <div className="second-txt">
          <h2>Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Eos et sit officia impedit, <br/>
            maiores quo aut minima numquam unde iste porro? 
            Dignissimos aut corrupti corporis nesciunt iure voluptates quasi mollitia?
          </p>
        </div>
      </section>

    </div>
  )
}

export default main