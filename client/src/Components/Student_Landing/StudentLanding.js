import react from "react";
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";

import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Updates from './Updates';
import Complaints from './Complaints';
import Messpage from './Messpage';
import LeaveForm from './Outpass';
const { Header, Content, Footer, Sider } = Layout;


const StudentLanding = () =>
{
        return(        
          <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                  Updates
                <Link to = '/student'/>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                Complaints
                <Link to = '/student/complaints'/>
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                Mess Feedback
                <Link to = '/student/Messpage'/>
              </Menu.Item>
              <Menu.Item key="4" icon={<UploadOutlined />}>
                Outpass
                <Link to = '/student/Outpass'/>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '24px 16px 0' }}>
              <Route path = "/student" exact  component = {Updates}/>
              <Route path = "/student/complaints" exact component = {Complaints}/>
              <Route path = "/student/Messpage" exact component = {Messpage}/>
              <Route path = "/student/Outpass" exact component = {LeaveForm}/>
            </Content>
          </Layout>
        </Layout>
        );
};
export default StudentLanding;



