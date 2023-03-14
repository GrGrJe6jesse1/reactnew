import React from 'react'
import './post.css'
import {useState} from 'react';

const post = () => {
  return (
    <section className='post-box'>
      {
        [1,2,3].map(function(){
          return(
            <div class="post-card">
              <h2>Lorem ipsum dolor sit.</h2>
              <p class="post-card-txt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                omnis ullam expedita accusamus facere dignissimos ut
                asperiores,<br />
                nostrum quasi similique laboriosam adipisci quisquam ipsum
                possimus ratione officiis distinctio excepturi nihil.
              </p>
            </div>
          )
        })
      }
    </section>
  )
}

export default post