import React, { useState } from "react";
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Button,Modal } from 'antd';
import { Table,Tag,Space } from "antd";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { useHistory } from "react-router";
import  Leave from "./Leave";
const { SubMenu } = Menu;
const { Column, ColumnGroup } = Table;
const { Header, Content, Sider } = Layout;


function EmployeeStatus(){
 

 
  
    return(
        <>        
                  <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                      <Breadcrumb.Item>Home</Breadcrumb.Item>
                      <Breadcrumb.Item>Employee-Status</Breadcrumb.Item>
                    
                    </Breadcrumb>
                    <Content
                      className="site-layout-background"
                      style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                      }}
                    >
                      <Table >
                            <Column title='First Name' dataIndex='employeeFirstName' key='employeeFirstName' ></Column>
                            <Column title='Status'></Column>
                      </Table>
                      
                    </Content>
                  </Layout>
               
        </>
    )
}


export default EmployeeStatus;