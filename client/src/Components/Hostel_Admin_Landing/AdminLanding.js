import react from "react";
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";

import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Postupdates from './Postupdates';
import { Complaints } from "./Complaints";
import Allotment from "./Allotment";

const { Header, Content, Footer, Sider } = Layout;


const AdminLanding = () =>
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
                Post Updates
                <Link to = '/admin/Postupdates'/>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                Complaints
                <Link to = '/admin'/>
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                Hostel Allotment
                <Link to = '/admin/Allotment'/>
              </Menu.Item>
              <Menu.Item key="4" icon={<UserOutlined />}>
                nav 4
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '24px 16px 0' }}>
              <Route path = "/admin" exact  component = {Complaints}/>
              <Route path = "/admin/Postupdates" exact component = {Postupdates}/>
              <Route path = "/admin/Allotment" exact component = {Allotment}/>
            </Content>
          </Layout>
        </Layout>
        );
};
export default AdminLanding;

