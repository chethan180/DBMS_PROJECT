import React, { useState } from 'react';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
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
import { Rate } from 'antd';

const Messpage = () => {
    const [componentSize, setComponentSize] = useState('default');
    const [form] = Form.useForm();

    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
  
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
};

return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        form={form}
        name="register"
        onFinish={onFinish}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        
        <Form.Item name = "Emp_Id" label="Student ID">
          <Input />
        </Form.Item>
        
        <Form.Item name = "Date_Of_Issue" label="DatePicker">
          <DatePicker />
        </Form.Item>

        <Form.Item name = "Rating" label="Rating">
        <Rate allowHalf defaultValue={0.0} />
        </Form.Item>
       
        <Form.Item name = "Remarks" label="Remarks">
          <Input.TextArea/>
        </Form.Item>
        
        <Form.Item>
          <Button type="primary" htmlType="submit">Post</Button>
        </Form.Item>
      </Form>
    </>
  );
};


export default Messpage;


