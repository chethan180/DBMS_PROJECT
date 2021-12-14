import React, { useState ,useEffect } from 'react';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import { Table, Tag, Space } from 'antd';
import {reviews} from "../../actions/crud";
import {useDispatch , useSelector} from "react-redux";
import DemoBar from './review';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Feedback = () => {
  const [form] = Form.useForm();
  const [loading , setloading] = useState(true);
  const [data ,setdata] = useState([]);
  

  const dispatch = useDispatch();
  const today = Date.now();

  function onFinish(values) {
    console.log('Received values of form: ', values);
    const Value = {
      ...values,
      "Date_Of_Issue" : values['Date_Of_Issue'].format('YYYY-MM-DD')
      // "Emp_Id": "1",
    };
    console.log(Value);
    dispatch(reviews(Value));
  }
  
  

  const post = useSelector( (state) => state.review.data);
  console.log(post);


  useEffect(() => {
    
    if(post){
      setdata(post);
      setloading(false);
    }
  });
  if(loading)
  {
    console.log("jio");
      return(
    <>
      <Form      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
      >
          
        <Form.Item name = "Date_Of_Issue" label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item name = "noon" label="Select">
          <Select>
            <Select.Option value="Breakfast">Breakfast</Select.Option>
            <Select.Option value="Lunch">Lunch</Select.Option>
            <Select.Option value="Snacks">Snacks</Select.Option>
            <Select.Option value="Dinner">Dinner</Select.Option>
          </Select>
        </Form.Item>
        {/* <Form.Item label="Number of Ratings">
        </Form.Item>

        <Form.Item label="Rating">
        </Form.Item>

        <Form.Item label="Individual Ratings">
        </Form.Item>
        
        <Form.Item label="Rating">
            
        </Form.Item> */}
           <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      </Form>
    </>
  );          
  }

  else{
    console.log("airtel");
    // form = ;
    return(
    <>
    <Form      {...formItemLayout}
    form={form}
    name="register"
    onFinish={onFinish}
    initialValues={{
      residence: ['zhejiang', 'hangzhou', 'xihu'],
      prefix: '86',
    }}
    scrollToFirstError
    >
        
      <Form.Item name = "Date_Of_Issue" label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item name = "noon" label="Select">
        <Select>
          <Select.Option value="Breakfast">Breakfast</Select.Option>
          <Select.Option value="Lunch">Lunch</Select.Option>
          <Select.Option value="Snacks">Snacks</Select.Option>
          <Select.Option value="Dinner">Dinner</Select.Option>
        </Select>
      </Form.Item>
      {/* <Form.Item label="Number of Ratings">
      </Form.Item>

      <Form.Item label="Rating">
      </Form.Item>

      <Form.Item label="Individual Ratings">
      </Form.Item>
      
      <Form.Item label="Rating">
          
      </Form.Item> */}
         <Form.Item {...tailFormItemLayout}>
      <Button type="primary" htmlType="submit">
        Register
      </Button>
    </Form.Item>
    </Form>
    <DemoBar data = {post}/>
  </>
    );
  }



};

export default Feedback;