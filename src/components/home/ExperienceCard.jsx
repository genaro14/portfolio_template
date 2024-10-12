import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="4">
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3 grayscale" src={data.companylogo} alt="" />
        <h4>{data.company}</h4>
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;