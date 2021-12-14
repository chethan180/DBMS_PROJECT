import React, { useState } from 'react';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import { Rate } from 'antd';
import { Table, Tag, Space } from 'antd';
import { Cascader } from 'antd';

import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  // Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
} from 'antd';

const { Column, ColumnGroup } = Table;

const Allotment = () => {
  const [componentSize, setComponentSize] = useState('default');
  function onChange(value) {
    console.log(value);
  }
 


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
        
        <Form.Item label="Block">
          <Select>
            <Select.Option value="Nilgiri">Nilgiri</Select.Option>
            <Select.Option value="Aravalli">Aravalli</Select.Option>
            <Select.Option value="Satpura">Satpura</Select.Option>
            <Select.Option value="Vindhya">Vindhya</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Room Number">
        {/* <Cascader options={options} onChange={onChange} placeholder="Please select" /> */}
        <Input/>
        </Form.Item>
    
       

        <Table dataSource={data}>
        <ColumnGroup title="Name">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Roll Number" dataIndex="RollNumber" key="RollNumber" />
        <Column title="Mail_Id" dataIndex="Mail_Id" key="Mail_Id" />
        <Column title="Mobile Number" dataIndex="MobileNumber" key="MobileNumber" />
        <Column
          title=" Fully Vaccinated"
          dataIndex="tags"
          key="tags"
          render={tags => (
            <>
              {tags.map(tag => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <a>Remove {record.lastName}</a>
            </Space>
          )}
        />
      </Table>
      <Form.Item>
          <Button>Allot</Button>
        </Form.Item>

      </Form>
    </>
  );
};

export default Allotment;


// const data = [
//     {
//       key: '1',
//       firstName: 'John',
//       lastName: 'Brown',
//       RollNumber: 32,
//       Mail_Id: 'New York No. 1 Lake Park',
//       MobileNumber:'98929839',
//       tags: ['Yes'],
//     },
//     {
//       key: '2',
//       firstName: 'Jim',
//       lastName: 'Green',
//       RollNumber: 42,
//       Mail_Id: 'London No. 1 Lake Park',
//       MobileNumber:'98929839',
//       tags: ['No'],
//     },
//   ];