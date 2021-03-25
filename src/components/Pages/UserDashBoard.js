import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Table } from 'antd';
import {Form,Input,Button, Card,Space, message,DatePicker,Modal} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { useHistory } from "react-router";
import Column from "antd/lib/table/Column";
import EmployeeStatus from "./EmployeeStatus";
import Leave from "./Leave";
import History from "./History";
import FestivalLeave from "./FestivalLeave";
const { Header, Content, Footer } = Layout;
const { TextArea } = Input;
const {RangePicker} = DatePicker;
const {  Sider } = Layout;

function EmployeeDashBoard(){
    let history= useHistory()
    const[isEmployee,setIsEmployee]=useState(true)
    const[isApplyforLeave,setIsApplyforLeave]=useState(false)
    const[isHistory,setIsHistory]=useState(false)
    const[isFestivalLeave,setFestivalLeave]=useState(false)
    const handleHistoryBack=()=>{
        history.push('/LoginPage')
    }
    
   const handleEmployee =()=> {
       setIsEmployee(true)
       setIsApplyforLeave(false)
       setIsHistory(false)
       setFestivalLeave(false)
   };
   const handleApplyforLeave =()=> {
    setIsEmployee(false)
    setIsApplyforLeave(true)
    setIsHistory(false)
    setFestivalLeave(false)
    };
    const handleHistory =()=> {
        setIsEmployee(false)
        setIsApplyforLeave(false)
        setIsHistory(true)
        setFestivalLeave(false)
    };
    const handleFestivalLeave=()=>{
        setIsEmployee(false)
        setIsApplyforLeave(false)
        setIsHistory(false)
        setFestivalLeave(true)

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
                      <Menu.Item  icon={<UserOutlined />} onClick={handleEmployee}>
                        Employee Status
                      </Menu.Item>
                      <Menu.Item icon={<UserOutlined />} onClick={handleApplyforLeave}>
                          Apply for Leave
                      </Menu.Item>
                      <Menu.Item icon={<UserOutlined />} onClick={handleHistory}>
                          History
                      </Menu.Item>
                      <Menu.Item icon={<UserOutlined />} onClick={handleFestivalLeave}> 
                         Festival Leave
                     </Menu.Item>
                     <Menu.Item onClick={handleHistoryBack}>
                         Logout
                     </Menu.Item>
                    
                    
                    </Menu>
                  </Sider>
                <Content style={{ padding: '0 50px' }}>
                
                <div className="site-layout-content">
                    {/* <Table>
                        <Column title='Column1'></Column>
                        <Column title='Column2'></Column>
                    </Table> */}
                    {
                        isEmployee?<EmployeeStatus/>:isApplyforLeave?<Leave/>:isHistory?<History/>:isFestivalLeave?<FestivalLeave/>:''

                    }
                    
                </div>
                </Content>
                </Layout>
                
            </Layout>
        </>
    )

}


export default EmployeeDashBoard;