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
  Remarks,
} from 'antd';

const Postupdates = () => {
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
        <Form.Item label="Remarks">
          <Input.TextArea/>
        </Form.Item>
        
        <Form.Item>
          <Button type="primary" htmlType="submit">Post</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Postupdates;
