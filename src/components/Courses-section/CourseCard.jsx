import React from "react";
import { Card, CardBody } from "reactstrap";

const CourseCard = (props) => {
  const { imgUrl, title, author,authorImg, description, rating } = props.item;

  return (
    <Card  className="course_card">
        <div className="single_course_item">
      <div className="course_img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>
        <CardBody>
      <div className="course_details">
        <h6 className="course_title mb-4">{title}</h6>

        <div className=" d-flex align-items-center">
          <p>{description}</p>
        </div>
        <div className=" d-flex justify-content-between align-items-center">
            <div className="row">
                <div className="col-3">
                    <img src={authorImg} alt="" style={{width:'50px',height:'50px',borderRadius:'50%',objectFit:'cover'}}/>
                </div>
                <div className="col-9 author">
                    <p>Conducted By</p>
                    <p><strong>{author}</strong></p>
                </div>
            </div>
          <p className="rating d-flex align-items-center gap-1">
            <i class="ri-star-fill"></i> {rating}K
          </p>
        </div>
        <div className="w-50 enroll-btn">
                <button className="btn">Enroll Now</button>
        </div>
      </div>
      </CardBody>
    </div>
    </Card>
    
  );
};

export default CourseCard;
