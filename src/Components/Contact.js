import React, { useState } from 'react'
import { Container,Row, Col } from 'react-bootstrap';

const Contact = () => {

  const [details, setDetails] = useState('');

  const emailHandler = (e) => {
    setDetails(e.target.value);
  }
  const PostEmail = async (e) => {
    e.preventDefault()

    await fetch("https://emailsubsc-dd2bc-default-rtdb.asia-southeast1.firebasedatabase.app/emails.json",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: details,
        })
      })
    setDetails('');

  }
  return (
  
        <Container style={{ textAlign: "center" }}>
           <h2 className="display-4" style={{ textAlign: 'center' }}>Contact Us</h2>
        
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          hic laboriosam suscipit labore in expedita alias. Distinctio quam fuga
          perferendis recusandae natus amet provident incidunt fugit soluta
          facere eos quis praesentium, illo officiis facilis sed dolorem,
          impedit porro nisi eveniet? Illo qui iste quisquam nisi magni
          molestiae. Dolor impedit obcaecati, amet voluptates quidem cupiditate
          voluptatem aperiam ipsa deserunt? Ipsum reiciendis tempora,
          reprehenderit ducimus rem temporibus a repudiandae. Ratione vero fugit
          officia magni repellendus quis, fugiat vel ipsum pariatur, omnis
          quidem.
        </p>
        <Row>
      <hr />
        <Col md={5}>
          <h4 >Phone</h4>
          <p >
            +91 9090909090
          </p>
          <h4>Email</h4>
          <p>
            photo.gallery@gmail.com
          </p>
        </Col>

				<Col md={5} style={{margin:" 50px"}}>

          <h4> Subscribe with your Email</h4>
          <input type="text" placeholder='Your Email' value={details} onChange={emailHandler} />
          <button  onClick={PostEmail}>Subscribe</button> 

        </Col>
      </Row>
			<hr />
    </Container>
  
  )
}

export default Contact
