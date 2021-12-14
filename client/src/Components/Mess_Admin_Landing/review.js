import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/charts';
import ReviewCard from './ReviewCard';
import "./ProductDetails.css";

const DemoBar = (props) => {
    console.log(props.data);
    const Value = props.data.Bar;
    const product = props.data;
    const [data , setdata] = useState([]);
  const [loading ,setloading] = useState(true);
    useEffect(() => {
      setdata(props.data.Bar);
      setloading(false);
    })
    // console.log(product.review);
    // console.log(Value);
  //     const data = [
  //   // {
  //   //   _id: '1951 年',
  //   //   count: 38,
  //   // },
  //   // {
  //   //   _id: '1952 年',
  //   //   count: 52,
  //   // },
  //   // {
  //   //   _id: '1956 年',
  //   //   count: 61,
  //   // },
  //   {
  //     _id: '5',
  //     count: 1,
  //   },
  //   {
  //     _id: '2',
  //     count: 1,
  //   },
  // ];
  
  const config = {
    data,
    xField: 'count',
    yField: '_id',
    seriesField: '_id',
    legend: {
      position: 'top-left',
    },
  };
if(!loading){
  console.log(loading);
  return (
    <>
    <Bar {...config} />
     {product.review && product.review[0] ? (
              <div className="reviews">
                {product.review &&
                  product.review.map((rvw) => (
                    <ReviewCard key={rvw._id} rvw={rvw} />
                  ))}
              </div>
            ) : (
              <p className="noReviews">No Reviews Yet</p>
            )}
  
      
      </>
      );  
}
else{
  return(
    <div>
    hi
  </div>
  );
}

};

export default DemoBar
// ReactDOM.render(<DemoBar />, document.getElementById('container'));
//   const data = [
//     {
//       year: '1951 年',
//       value: 38,
//     },
//     {
//       year: '1952 年',
//       value: 52,
//     },
//     {
//       year: '1956 年',
//       value: 61,
//     },
//     {
//       year: '1957 年',
//       value: 145,
//     },
//     {
//       year: '1958 年',
//       value: 48,
//     },
//   ];
//   const config = {
//     data,
//     xField: 'value',
//     yField: 'year',
//     seriesField: 'value',
//     legend: {
//       position: 'top-left',
//     },
//   };