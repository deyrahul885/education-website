import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/students.webp";
import "./herosection.css";

const HeroSection = () => {
  return (
    <section className="hero_section" id="/">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero_content">
              <h2 className="mb-4 hero_title">
              Making Your Childs<br/> World Better
              </h2>
              <p className="mb-5">
              A proper education sets people up to grow personally, professionally, and socially. It can awaken joy, curiosity and a deep desire to solve problems and help others. Plus, teaching a student can inspire them to pursue leadership roles and positively impact those around them.
              </p>
            </div>
                <button className='btn btn-view'>Our Courses</button>
                <button className='btn btn-get'>Get Started</button>
            {/* <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div> */}
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-120 hero_img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
