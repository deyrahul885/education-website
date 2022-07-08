import React,{useState} from 'react'
import {Card, CardBody, Container } from 'reactstrap'
import './faq.css'

const Faqqq = ({question,answer}) => {

    const[show,setShow] = useState(false)

  return (
    <>
      <Container>
        <Card>
            <CardBody style={{display:'flex',justifyContent:'space-between'}}>
            <h2 className='faq-question'>{question}</h2>
            <h2 className='toggle-btn' onClick={()=>setShow(!show)}>{show?"-":"+"}</h2>
            </CardBody>
            {show && 
            <CardBody>
            <p>{answer}</p>
            </CardBody>
            }
        </Card>
      </Container>
    </>
  )
}

export default Faqqq