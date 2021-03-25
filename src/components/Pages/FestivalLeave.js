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

function FestivalLeave(){
    
    
   
    
    return(
        <>
            <Layout className="layout">
               
               <Layout>
               
                <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>History</Breadcrumb.Item> 
                </Breadcrumb>
                <div className="site-layout-content">
                    <Table>
                        <Column title='Column1'></Column>
                       
                    </Table>
                    
                </div>
                </Content>
                </Layout>
                
            </Layout>,
        </>
    )

}


export default FestivalLeave ;