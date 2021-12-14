import React, { useState ,useEffect } from 'react';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import { Table, Tag, Space } from 'antd';
import {Allot} from "../../actions/crud";
import { isEmp } from '../../actions/crud';
import {useDispatch , useSelector} from "react-redux";
import { Descriptions } from 'antd';
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
const { Column, ColumnGroup } = Table;


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

const Allotment = () => {
  const [form] = Form.useForm();
  const [loading , setloading] = useState(true);
  const [data ,setdata] = useState([]);
  const [datae , setdatae]  = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));


  const dispatch = useDispatch();
  const today = Date.now();

  function onFinish(values) {
    console.log('Received values of form: ', values);
    const Value = {
      ...values,
      // "Complained_Date": new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(today),
    };
    console.log(Value);
    dispatch(Allot(Value));
  }
  
  

  const post = useSelector( (state) => state.allot.data);
  console.log(post);

  const post2 = useSelector( (state) => state.empty.data);
  console.log(post2);

  useEffect(() => {
    dispatch(isEmp());
  } , [])
  useEffect(() => {
    if(post){
      setdata(post);
      setloading(false);
    }
  });
  useEffect(() => {
    if(post2){
      setdatae(post2);
      console.log(datae)
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
          
          <Form.Item name = "Block"label="Block">
          <Select>
            <Select.Option value="Nilgiri">Nilgiri</Select.Option>
            <Select.Option value="Aravalli">Aravalli</Select.Option>
            <Select.Option value="Satpura">Satpura</Select.Option>
            <Select.Option value="Vindhya">Vindhya</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name = "Room" label="Room Number">
        {/* <Cascader options={options} onChange={onChange} placeholder="Please select" /> */}
        <Input/>
        </Form.Item>
        <Form.Item name = "Emp_Id" label="Id">
        {/* <Cascader options={options} onChange={onChange} placeholder="Please select" /> */}
        <Input/>
        </Form.Item>
           <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      </Form>
      <Table dataSource={datae}>
          <Column title="ROOM" dataIndex="_id" key="_id" />
          </Table>
    </>
  );          
  }

  else{
    console.log("airtel");
    // form = ;
    return(
    <>
        <Form {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >

          <Form.Item name = "Block" label="Block">
            <Select>
              <Select.Option value="Nilgiri">Nilgiri</Select.Option>
              <Select.Option value="Aravalli">Aravalli</Select.Option>
              <Select.Option value="Satpura">Satpura</Select.Option>
              <Select.Option value="Vindhya">Vindhya</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name="Room" label="Room Number">
            <Input />
          </Form.Item>

          <Form.Item name = "Emp_Id" label="Id">
        <Input/>
        </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
  <Table dataSource={datae}>
          <Column title="ROOM" dataIndex="Room" key="Room" />
          </Table>
        <Table dataSource={data}>
          <Column title="Id" dataIndex="Emp_Id" key="Emp_Id" />
          <Column title="Name" dataIndex="Staff_Name" key="Staff_Name" />
          <Column title="Batch" dataIndex="Batch" key="Batch" />
          <Column title="Room" dataIndex="Room" key="Room" />
          <Column title="Block" dataIndex="Block" key="Block" />
          </Table>
      </>
          );
          }



          };
export default Allotment; 
