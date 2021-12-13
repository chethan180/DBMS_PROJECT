import React, { useEffect, useState } from 'react';
import { Table, Tag, Space } from 'antd';
import { wcomp } from '../../actions/crud';
import {useDispatch ,useSelector } from 'react-redux'; 


const { Column, ColumnGroup } = Table;


export const Complaints = () => {
  const [loading , setloading] = useState(true);
  const [data ,setdata] = useState([]);
  const dispatch = useDispatch();
  const form = {"Emp_Id" : "1"}
  useEffect(() => {
    dispatch(wcomp(form));
  } , [dispatch])

  const post = useSelector( (state) => state.wcomp.data);
  console.log(post);

  useEffect(() => {
    // console.log(post);
    if(post){
      // console.log(post);
      // const q = post;
      setdata(post);
      // console.log(posts);
      setloading(false);
    }
  });
  if(loading)
  {
      return(
          <div>
              wait
          </div>
      );
  }
      return(
        <Table dataSource={data}>
        <Column title="Id" dataIndex="Emp_Id" key="Emp_Id" />
        <Column title="Sroom" dataIndex="Sroom" key="Sroom" />
        <Column title="Sblock" dataIndex="Sblock" key="Sblock" />
        <Column title="Type" dataIndex="Type" key="Type" />
        <Column title="Comments" dataIndex="Comments" key="Comments" />
        <Column title="Complained Date" dataIndex="Complained_Date" key="Complained_Date" />
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



