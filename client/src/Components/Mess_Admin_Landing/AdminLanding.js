import react from "react";
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";

import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import MessPostupdates from './Postupdates';
import Feedback from './Feedback';

const { Header, Content, Footer, Sider } = Layout;


const MessAdminLanding = () =>
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
                <Link to = '/admin1/'/>
              </Menu.Item>
              <Menu.Item key="2" icon={<UploadOutlined />}>
                Feedback
                <Link to = '/admin1/Feedback'/>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            {/* <Header className="site-layout-sub-header-background" style={{ padding: 0 }} /> */}
            <Content style={{ margin: '24px 16px 0' }}>
              {/* <Postupdates/> */}
              <Route path = "/admin1/" exact component = {MessPostupdates}/>
              <Route path = "/admin1/Feedback" exact component = {Feedback}/>
            </Content>
            {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
          </Layout>
        </Layout>
        );
};
export default MessAdminLanding;



