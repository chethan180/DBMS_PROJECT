import React, { useState } from 'react';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import { Table, Tag, Space } from 'antd';
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

const Feedback = () => {
  const [componentSize, setComponentSize] = useState('default');

  const data = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      RollNumber: 32,
      Mail_Id: 'New York No. 1 Lake Park',
      MobileNumber:'98929839',
      tags: ['Yes'],
    },
    {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      RollNumber: 42,
      Mail_Id: 'London No. 1 Lake Park',
      MobileNumber:'98929839',
      tags: ['No'],
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      RollNumber: 32,
      Mail_Id: 'Sidney No. 1 Lake Park',
      MobileNumber:'98929839',
      tags: ['Yes'],
    },
  ];

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <Form dataSource={data} 
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
          
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="Breakfast">Breakfast</Select.Option>
            <Select.Option value="Lunch">Lunch</Select.Option>
            <Select.Option value="Snacks">Snacks</Select.Option>
            <Select.Option value="Dinner">Dinner</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Number of Ratings">
        </Form.Item>

        <Form.Item label="Rating">
        </Form.Item>

        <Form.Item label="Individual Ratings">
        </Form.Item>
        
        <Form.Item label="Rating">
            
        </Form.Item>
     
       


      </Form>
    </>
  );
};

export default Feedback;