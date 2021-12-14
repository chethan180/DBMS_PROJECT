import { Rating } from "@material-ui/lab";
import React from "react";

const ReviewCard = ({ rvw }) => {
    // console.log({rvw});
  const options = {
    value: parseFloat(rvw.Rating),
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div className="reviewCard">
      <p className = "hi"> Id : {rvw.Emp_Id}</p>
      <Rating {...options} />
      <span className="reviewCardComment">{rvw.Remarks}</span>
    </div>
  );
};

export default ReviewCard;