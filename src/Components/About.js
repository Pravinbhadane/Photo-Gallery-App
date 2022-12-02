import React from 'react'
import photoLogo from '../assets/logo.png'
const About = () =>{
  return (
    <div style={{ margin: '40px 20px' }}>
    <h2 className="display-4" style={{ textAlign:'center' }}>About Us</h2>
    <p style={{marginLeft:'45%'}}>
    <img
              alt="logo"
              src={photoLogo}
              width="100"
              height="80"
 />
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis adipisci,
      perferendis consequuntur ullam sint eligendi id, iste debitis quas eum
      eos reiciendis illo itaque nam quaerat esse unde dolorum modi odit
      eveniet nemo suscipit possimus distinctio? Quidem aperiam rerum, porro
      non illo impedit enim eligendi pariatur nisi accusantium vitae numquam.
    </p>
   
  </div>
  )
}

export default About
