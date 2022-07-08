import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg3 from "../../assests/images/img1.jpg";
import courseImg2 from "../../assests/images/course-img-3.jpg";
import courseImg1 from "../../assests/images/course-img-1.jpeg";
import face1 from '../../assests/images/face-1.jpeg';
import face2 from '../../assests/images/face-2.webp';
import face3 from '../../assests/images/face-3.webp'
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Web Development",
    description:'This course is designed to start you on a path toward future studies in web development and design, no matter how little experience or technical knowledge you currently have',
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
    authorImg: face2,
    author:'Jhonson'
  },

  {
    id: "02",
    title: "Web UX/UI Design",
    description:'The UI/UX Design Specialization, which brings a design-centric approach to user interface (UI) and user experience (UX) design, and offers practical, skill-based …',
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
    authorImg: face1,
    author:'Andrea'
  },

  {
    id: "03",
    title: "Wordpress Development",
    description:'WordPress is software that started as a blog publisher, but it has since evolved as a platform that supports multiple online entities. These include e-commerce stores, forums, galleries,...',
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
    author:'John Smith',
    authorImg: face3,
  },
];

const Courses = () => {
  return (
    <section id="/courses">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course_top_wrapper d-flex justify-content-between align-items-center">
              <div className="course_top">
                <h2>Our Popular Courses</h2>
                <p>
                You will learn everything you need to know in order to get started to become familiar with the world of UI/UX design
                 and the tools you’ll need to become a UI/UX Designer.
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
