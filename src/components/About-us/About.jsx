import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section id="/about">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about_img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about_content">
              <h2>About Us</h2>
              <p>
              Since 2010, it has been our mission to help aspiring students accomplish their education and career goals.
              Online education offers flexibility for people who have work or family responsibilities outside of school. 
              Often, students enrolled in online education programs are able to work at their own pace,accelerating their studies if desired. 
              Online education programs may also charge less than traditional programs.
              </p>

              <div className="about_counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single_counter">
                    <span className="counter">
                      <CountUp start={0} end={85} duration={2} suffix="+" />
                    </span>

                    <p className="counter_title">All teachers</p>
                  </div>

                  <div className="single_counter">
                    <span className="counter">
                      <CountUp start={0} end={800} duration={2} suffix="+" />
                    </span>

                    <p className="counter_title">All Students</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single_counter">
                    <span className="counter">
                      <CountUp start={0} end={500} duration={2} suffix="+" />
                    </span>

                    <p className="counter_title">Online Students</p>
                  </div>

                  <div className="single_counter">
                    <span className="counter">
                      <CountUp start={0} end={300} duration={2} suffix="+" />
                    </span>

                    <p className="counter_title">Offline Students</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
