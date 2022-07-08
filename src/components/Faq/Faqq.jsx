import React,{useState} from 'react'
import { Container,Row,Col } from 'reactstrap';
import {question} from '../Faq/api';
import Faqqq from '../Faq/Faqqq'


const Faqq = ({id}) => {
    const[data,setData] = useState(question)
  return (
    <>
    <section id={id}>
      <Container style={{backgroundColor: 'var(--bg-color)'}}>
        <Row>
          <Col lg="4" md="6">
            <div className="faq-title text-center pt-2">
              <h2>FAQ</h2>
            </div>
          </Col>

          <Col lg="8" md="6" className='p-4'>
            <div className="faq_content">
              {
                data.map((curElem)=>{
                  return <Faqqq key={curElem.id}{...curElem}/>
               }
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Faqq