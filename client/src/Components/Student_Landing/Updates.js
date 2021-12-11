import React, { useEffect, useState } from 'react';
import { Table, Tag, Space } from 'antd';
import axios from 'axios';
import {useDispatch ,useSelector } from 'react-redux'; 
import { getPosts } from '../../actions/crud';

const { Column, ColumnGroup } = Table;

const Updates = () => {
    const [loading , setloading] = useState(true);
    const [data ,setdata] = useState([]);
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(getPosts());
    } , [dispatch])

    const post = useSelector( (state) => state.crud.data);
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
        <Column title="Name" dataIndex="Staff_Name" key="Staff_Name" />
        <Column title="Batch" dataIndex="Batch" key="Batch" />
        <Column title="Date" dataIndex="Date_Of_Issue" key="Date_Of_Issue" />
        <Column title="Comments" dataIndex="Comments" key="Comments" />

      </Table>
    )
}

export default Updates;