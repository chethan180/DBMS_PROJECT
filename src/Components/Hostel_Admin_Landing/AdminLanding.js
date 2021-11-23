import react from "react";
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";

import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Postupdates from './Postupdates';
import { Complaints } from "./Complaints";

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
                nav 2
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
              </Menu.Item>
              <Menu.Item key="4" icon={<UserOutlined />}>
                nav 4
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            {/* <Header className="site-layout-sub-header-background" style={{ padding: 0 }} /> */}
            <Content style={{ margin: '24px 16px 0' }}>
              {/* <Postupdates/> */}
              <Route path = "/admin" exact  component = {Complaints}/>
              <Route path = "/admin/Postupdates" exact component = {Postupdates}/>
                
            </Content>
            {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
          </Layout>
        </Layout>
        );
};
export default AdminLanding;



// import { Layout, Menu } from 'antd';
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

// const { Header, Content, Footer, Sider } = Layout;

// ReactDOM.render(
//   <Layout>
//     <Sider
//       breakpoint="lg"
//       collapsedWidth="0"
//       onBreakpoint={broken => {
//         console.log(broken);
//       }}
//       onCollapse={(collapsed, type) => {
//         console.log(collapsed, type);
//       }}
//     >
//       <div className="logo" />
//       <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
//         <Menu.Item key="1" icon={<UserOutlined />}>
//           nav 1
//         </Menu.Item>
//         <Menu.Item key="2" icon={<VideoCameraOutlined />}>
//           nav 2
//         </Menu.Item>
//         <Menu.Item key="3" icon={<UploadOutlined />}>
//           nav 3
//         </Menu.Item>
//         <Menu.Item key="4" icon={<UserOutlined />}>
//           nav 4
//         </Menu.Item>
//       </Menu>
//     </Sider>
//     <Layout>
//       <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
//       <Content style={{ margin: '24px 16px 0' }}>
//         <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
//           content
//         </div>
//       </Content>
//       <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
//     </Layout>
//   </Layout>,
//   mountNode,
// );