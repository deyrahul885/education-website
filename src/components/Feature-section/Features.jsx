import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Building tools that can remotely control other devices and has the ability to easily access hardware systems and resources.",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "You can truly reap the benefits of both – the convenience of conversational support for your customer and the flexibility of ticketing for your teammates.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Earn certifications that show you are keeping pace with today’s technical roles and requirements. ",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section id="/features">
      <Container>
        <Row>
            <Col lg="3" md="6" className="feature_sec">
              <div className="single_feature text-center px-4">
                <h2 className="mb-3">
                  Awesome<br/>Features 
                </h2>
                <p>Awesome support is great for end users.  But we've also made it very developer friendly. </p>
              </div>
            </Col>
          {FeatureData.map((item, index) => (
            <Col lg="3" md="6" key={index} className="p-3">
              <Card className="feature_card">
                <CardBody>
                <div className="single_feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;