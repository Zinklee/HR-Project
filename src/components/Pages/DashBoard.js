import React, { useState,useEffect } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Button , Collapse, Modal} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Table,Tag,Space } from "antd";
import axios from 'axios';
const { Column, ColumnGroup } = Table;

const { Header, Content, Sider } = Layout;



function DashBoard(){
    const[allData,setAllData] = useState([])
    const[allDelete,setAllDelete]=useState([])
    const[isSeeMore,setSeeMore]=useState(false)
    const[singleDetail,setSingleDetail]=useState({})
    const[isModalVisible, setIsModalVisible] = useState(false);


    const showModal = (e) => {
        setIsModalVisible(true);
      };

    const handleOk = () => {
        setIsModalVisible(false);
      };
    
    const handleCancel = () => {
        setIsModalVisible(false);
      };

    
       
    
    
    useEffect((e)=>{
        async function fetchAPI(){
            let response = await axios.get('https://hrglory.herokuapp.com/api/hr/employee/getAllEmployee')
            .then(response=>{
                console.log('response', response.data.data)
                setAllData(response.data.data)
            })
        }
        fetchAPI()
       
        
      
    },[allDelete]);

    const handleDelete = (employeeId) => {
        console.log('employee id',employeeId)
        axios.delete(`https://hrglory.herokuapp.com/api/hr/employee/${employeeId}/delete`)
             .then(response=>{
               console.log(response.data)
               setAllDelete('Data deleted')
             })
      
    }
    
    const handleSeeMore=async(e)=>{
        let response = await axios.put(`https://hrglory.herokuapp.com/api/hr/employee/${e}/details`)
             .then(response=>{
                 console.log('Single Detail',response.data.data)
                 setSingleDetail(response.data.data)
                
            

             })
            
    }
    
    
   
    
    return(
        
        <>
        
            <Layout>
                <Header className="header">
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
                                <Menu.Item key="sub1" icon={<UserOutlined />} title="Employee 1" >
                                    Employee 1
                                </Menu.Item>
                                <Menu.Item key="sub2" icon={<LaptopOutlined />} title="Employee 2">
                                    Employee 2
                                </Menu.Item>
                                
                                </Menu>
                            </Sider>
                            <Layout style={{ padding: '24px 24px 24px' }}>
                                <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                                
                                </Breadcrumb>
                                <Content
                                    className="site-layout-background"
                                    style={{
                                        padding: 24,
                                        margin: 0,
                                        minHeight: 280,
                                    }}
                                >
                                <Table dataSource={allData}  > 
                                    <ColumnGroup title='Name'>
                                      <Column title='First Name' dataIndex='employeeFirstName' key='employeeFirstName' ></Column>
                                      <Column title='Last Name' dataIndex='employeeLastName' key='employeeLastName'></Column>
                                    </ColumnGroup>
                                    <Column title='DateOfBirth' dataIndex='employeeDob' key='employeeDob'></Column>
                                    <Column title='Gender' dataIndex='employeeGender' key='employeeGender'></Column>
                                    <Column title='Phone Number' dataIndex='employeeContact' key='employeeContact ' ></Column>
                                    <Column title='Email' dataIndex='employeeEmail' key='employeeEmail'></Column>
                                    <Column title='EmployeeAddress' dataIndex='employeeAddress' key='employeeAddress'></Column>
                                    <Column title='Action'  dataIndex='employeeId' render={(e) => (
                                            <Space>
                                                
                                                <Button onClick={()=>{handleSeeMore(e); console.log('E',e);setSeeMore(true);console.log('see more',isSeeMore);showModal(e);console.log('single', singleDetail)}}>See more </Button>
                                                        
                                                <a><Button  onClick={()=>{handleDelete(e); console.log('All date',e)}}>Delete</Button></a>
                                            </Space>
  
                                           
                                           
                                          )}></Column>
                                   
                                    
                             
                                        
                                     
                                    
                                </Table>
                                <Modal title='More Information' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={2000}>
                                                    <p>
                                                    
                                                        
                                                        
                                                        <Table dataSource={[singleDetail]} pagination={false}>
                                                        
                                                        <Column title='Alternate Number' dataIndex='employeeAlternateContact' key='employeeAlternateContact'></Column>
                                                        <Column title='Company name' dataIndex='employeePerviousCompanyName' key='employeePerviousCompanyName'></Column>
                                                        <Column title='Company address' dataIndex='employeePerviousCompanyAddress' key='employeePerviousCompanyAddress' ></Column>
                                                        <Column title='Joining date' dataIndex='employeePerviousCompanyJoinDate' key='employeePerviousCompanyJoinDate'></Column>
                                                        <Column title='Leavning date' dataIndex='employeePerviousCompanyEndDate' key='employeePerviousCompanyEndDate'></Column>
                                                        <Column title='Proof' dataIndex='employeeIdProof' key='employeeIdProof'></Column>
                                                        
                                                        </Table>
                                                        
                                                    </p>

                                                </Modal>
                                        
                               
                                </Content>
                            </Layout>
                </Layout>
            </Layout>
        </>
    )
}



export default DashBoard;   