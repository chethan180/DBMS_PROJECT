import React, { useState } from 'react';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import { wu } from '../../actions/crud'; 
import { useDispatch,useSelector } from 'react-redux';
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

const { Option } = Select;

const Postupdates = () => {
  const [componentSize, setComponentSize] = useState('default');
  const [form] = Form.useForm();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const today = Date.now();

  function onFinish(values) {
    console.log('Received values of form: ', values);
    const Value = {
      ...values,
      'Emp_Id' : user?.result.Emp_Id,
      "Date_Of_Issue": new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(today),
    };
    console.log(Value);
    dispatch(wu(Value));
  }
  const post = useSelector( (state) => state.wupdt.data);
  console.log(post);

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <Form
      form={form}
      name="register"
      onFinish={onFinish}
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
        

        <Form.Item name="Batch" label="Batch">
          <Select>
            <Select.Option value="2016">2016</Select.Option>
            <Select.Option value="2017">2017</Select.Option>
            <Select.Option value="2018">2018</Select.Option>
            <Select.Option value="2019">2019</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
        name = "Comments"
        label="Remarks">
          <Input.TextArea/>
        </Form.Item>
        <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
        
      </Form>
    </>
  );
};

export default Postupdates;