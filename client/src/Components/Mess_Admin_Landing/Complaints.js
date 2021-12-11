import React from 'react';
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;


const Complaints = () => {
    const data = [
        {
          key: '1',
          Emp_Id:'1',
          Staff_Name:'sukesh',
          RoomNumber: 'John',
          Block: 'Brown',
          Remarks: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          Emp_Id:'1',
          Staff_Name:'sukesh',
          RoomNumber: 'Jim',
          Block: 'Green',
          Remarks: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          Emp_Id:'1',
          Staff_Name:'sukesh',
          RoomNumber: 'Joe',
          Block: 'Black',
          Remarks: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];
      return(
        <Table dataSource={data}>
          <Column title="Emp_Id" dataIndex="Emp_Id" key="Emp_Id" />
          <Column title="Staff_Name" dataIndex="Staff_Name" key="Staff_Name" />
        {/* <ColumnGroup title="Name"> */}
          <Column title="Room Number" dataIndex="RoomNumber" key="RoomNumber" />
          <Column title="Block" dataIndex="Block" key="Block" />
        {/* </ColumnGroup> */}
        <Column
          title="Type of Problem"
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
        
        <Column title="Remarks" dataIndex="Remarks" key="Remarks" />
        
        <Column
          title="Is_Solved"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <a>Yes</a>
              <a>No</a>
            </Space>
          )}
        />
      </Table>
      );
}
export default Complaints;



