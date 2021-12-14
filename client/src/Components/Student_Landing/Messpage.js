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
import { messcomp } from '../../actions/crud';
import dateFormat from "dateformat";
import moment from 'moment';
import {useSelector , useDispatch} from "react-redux";

const Messpage = () => {
    const [componentSize, setComponentSize] = useState('default');
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dateFormat = 'YYYY/MM/DD';

    const onFinish = (values) => {
      console.log(values.Date_Of_Issue._d);
      console.log('Received values of form: ', values);
      const rangeTimeValue = values['Date_Of_Issue'].format('YYYY-MM-DD');

      const Rating = values['Rating'].toString();
      const Values = {
        ...values ,
        'Emp_Id' : user?.result.Emp_Id,        // 'Date_Of_Issue' : "2002-12-12",
        "Rating" : Rating ,
        "Date_Of_Issue" : values['Date_Of_Issue'].format('YYYY-MM-DD')
      };
      console.log("Value" , Values);
      dispatch(messcomp(Values));

    };

    const post = useSelector((state) => state.messcomp.data);
    console.log(post);
  
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
        
        {/* <Form.Item name = "Emp_Id" label="Student ID">
          <Input />
        </Form.Item> */}
        
        <Form.Item name = "Date_Of_Issue" label="DatePicker">
          <DatePicker  />
        </Form.Item>

        <Form.Item name = "noon" label="select">
          <Select>
            <Select.Option value="breakfast">breakfast</Select.Option>
            <Select.Option value="Lunch">Lunch</Select.Option>
            <Select.Option value="Snacks">Snacks</Select.Option>
            <Select.Option value="Dinner">Dinner</Select.Option>
          </Select>
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


