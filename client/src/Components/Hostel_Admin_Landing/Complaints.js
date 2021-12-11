import React from 'react';
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;


export const Complaints = () => {
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
      return(
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
      );
}



