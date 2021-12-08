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
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        
        <Form.Item label="Student ID">
          <Input />
        </Form.Item>
        
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>

        <Form.Item label="Rating">
        <Rate allowHalf defaultValue={0.0} />
        </Form.Item>
       
        <Form.Item label="Remarks">
          <Input.TextArea/>
        </Form.Item>
        
        <Form.Item>
          <Button>Post</Button>
        </Form.Item>
      </Form>
    </>
  );
};


export default Messpage;


