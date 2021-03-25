import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Table } from 'antd';
import {Form,Input,Button, Card,Space, message,DatePicker,Modal} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { useHistory } from "react-router";
import Column from "antd/lib/table/Column";

const { Header, Content, Footer } = Layout;
const { TextArea } = Input;
const {RangePicker} = DatePicker;
const {  Sider } = Layout;

function EmployeeDashBoard(){
    let history= useHistory()
    const handleHistoryBack=()=>{
        history.push('/LoginPage')
    }
    const handleHistory=()=>{
        history.push('/History')
    }
   
    
    return(
        <>
            <Layout className="layout">
                <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    
                </Menu>
                </Header>
               <Layout>
               <Sider width={200} className="site-layout-background">
                    <Menu
                      mode="inline"
                      defaultSelectedKeys={['1']}
                      defaultOpenKeys={['sub1']}
                      style={{ height: '100%', borderRight: 0 }}
                    >
                      <Menu.Item key="sub1" icon={<UserOutlined />} title="subnav 1">
                        Employee Status
                      </Menu.Item>
                      <Menu.Item>
                          Apply for Leave
                      </Menu.Item>
                      <Menu.Item onClick={handleHistory}>
                          History
                      </Menu.Item>
                     <Menu.Item onClick={handleHistoryBack}>
                         Logout
                     </Menu.Item>
                    
                    </Menu>
                  </Sider>
                <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>DashBoard</Breadcrumb.Item> 
                </Breadcrumb>
                <div className="site-layout-content">
                    <Table>
                        <Column title='Column1'></Column>
                        <Column title='Column2'></Column>
                    </Table>
                    
                </div>
                </Content>
                </Layout>
                
            </Layout>,
        </>
    )

}


export default EmployeeDashBoard;