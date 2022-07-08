import React from 'react'
import { Container,Row,Col,Card,CardBody } from 'reactstrap'
import contactBg from '../../assests/images/contact.webp';
import './contact.css'

const Contact = () => {
  return (
    <>
    <section className='contact_section' id="/contact_us">
        <Container>
            <div className='contact_top'>
                <h2>Contact Us</h2>
                <h2 className='contact_number'>
                <i class="ri-phone-fill"></i>
                <span>(+91)8210231091</span>
                </h2>
            </div>
            <div>
                <img src={contactBg} alt="" style={{height:'400px', width:'100%'}}/> 
            </div>
            <div>
            <Row className='row contact_row'>
                <Col lg="6" md="6">
                <Card style={{marginBottom:'20px'}}>
                    <CardBody>
                    <div className="single_feature text-center px-4">
                        <h2 className="mb-3">
                        <i class="ri-phone-fill"></i>
                        </h2>
                        <h6>Call Our Experts</h6>
                        <p>Interested to become a software developer. Just pickup the phone call us...</p>
                    </div>
                    </CardBody>
                </Card>
                </Col>
                <Col lg="6" md="6">
                <Card style={{marginBottom:'20px'}}>
                    <CardBody>
                    <div className="single_feature text-center px-4">
                        <h2 className="mb-3">
                        <i class="ri-discuss-line"></i>
                        </h2>
                        <h6>Chat with us</h6>
                        <p>Sometime you need help to choose your carrier, so chat with us. We are ready to help you...</p>
                    </div>
                    </CardBody>
                </Card>
                </Col>
            </Row>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Contact