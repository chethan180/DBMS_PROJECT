import React, { useState } from 'react';
import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
import {comp} from "../../actions/crud"
import { useDispatch , useSelector } from "react-redux";
const { Option } = Select;

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

const Complaints = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const today = Date.now();

  function onFinish(values) {
    console.log('Received values of form: ', values);
    const Value = {
      ...values,
      'Emp_Id' : user?.result.Emp_Id,
      "Complained_Date": new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(today),
    };
    console.log(Value);
    dispatch(comp(Value));
  }



  const post = useSelector( (state) => state.comp.data);
  console.log(post);


  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
            <Form.Item name = "Sroom" label="Room Number">
          <Input />
        </Form.Item>
        <Form.Item name = "Sblock" label="Select Block">
          <Select>
            <Select.Option value="Nilgiri">Nilgiri</Select.Option>
            <Select.Option value="Aravalli">Aravalli</Select.Option>
            <Select.Option value="Satpura">Satpura</Select.Option>
            <Select.Option value="Vindhya">Vindhya</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name = "Type" label="Type of problem">
          <Select>
            <Select.Option value="Keys">Keys Lost</Select.Option>
            <Select.Option value="Room cleaning">Room cleaning</Select.Option>
            <Select.Option value="Washroom">Washroom</Select.Option>
          </Select>
        </Form.Item>

        {/* <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item> */}
       
        <Form.Item
        name = "Comments"
        label="Remarks">
          <Input.TextArea/>
        </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Complaints;
