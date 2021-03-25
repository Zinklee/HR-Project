import React, { useState,useEffect } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Button , Collapse, Modal,Input, DatePicker,Select, Upload, message
} from 'antd';
import moment from 'moment';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Table,Tag,Space } from "antd";
import axios from 'axios';
import { Form } from "antd";
import TextArea from 'antd/lib/input/TextArea';
import { useHistory } from 'react-router';
import EmployeeStatus from './EmployeeStatus'
import { Link,Route } from 'react-router-dom';
import RequestLeave from './RequestLeave';
const { Column, ColumnGroup } = Table;
const { Header, Content, Sider } = Layout;
const { Option } = Select;


function DashBoard(){
    let history=useHistory()
    const[allData,setAllData] = useState([])
    const[allDelete,setAllDelete]=useState([])
    const[isSeeMore,setSeeMore]=useState(false)
    const[singleDetail,setSingleDetail]=useState({})
    const[isModalVisible, setIsModalVisible] = useState(false);
    const[isModalEdit,setModalEdit]=useState(false);
    const[isModalConfirm,setModalConfirm]=useState(false)
    const[visible,setVisible]=useState(false)

    const[employeeId,setEmployeeId]=useState('')
    const [employeeFristName, setemployeeFristName] = useState('')
    const [employeeLastName, setemployeeLastName] = useState('')
    const [dateOfBirth, setdateOfBirth] = useState('')
    const [gender, setgender] = useState('')
    const [mobileNumber, setmobileNumber] = useState('')
    const [emailID, setemailID] = useState('')
    const [employeeAddress, setemployeeAddress] = useState('')
    const [alternateMobileNumber, setalternateMobileNumber] = useState('')
    const [companyName, setcompanyName] = useState('')
    const [companyAddress, setcompanyAddress] = useState('')
    const [dateOfJoining, setdateOfJoining] = useState('')  
    const [dateOfLeaveing, setdateOfLeaveing] = useState('')
    const [identityProof, setidentityProof] = useState('')
    
    const [isEmployee, setIsEmployee] = useState(true)
    const [isEmployeeStatus, setIsEmployeeStatus] = useState(false)
    const [isRequestLeave, setisRequestLeave] = useState(false)
    

    const showModal = (e) => {
        setIsModalVisible(true);
        // setModalEdit(true)
      };
    const showEdit=(e)=>{
        console.log('whole', e)
         axios.put(`https://hrglory.herokuapp.com/api/hr/employee/${e}/details`)
        .then(response=>{
            console.log('Response', response.data.data.employeeFirstName)
            console.log('company name',response.data.data.employeePerviousCompanyName)
            setEmployeeId(response.data.data.employeeId)
            setemployeeFristName(response.data.data.employeeFirstName)
            setemployeeLastName(response.data.data.employeeLastName)
            setdateOfBirth(response.data.data.employeeDob)
            setgender(response.data.data.employeeGender)
            setmobileNumber(response.data.data.employeeContact)
            setemailID(response.data.data.employeeEmail)
            setemployeeAddress(response.data.data.employeeAddress)
            setalternateMobileNumber(response.data.data.employeeAlternateContact)
            setcompanyName(response.data.data.employeePerviousCompanyName)
            setcompanyAddress(response.data.data.employeePerviousCompanyAddress)
            setdateOfJoining(response.data.data.employeePerviousCompanyJoinDate)
            setdateOfLeaveing(response.data.data.employeePerviousCompanyEndDate)
            setidentityProof(response.data.data.employeeIdProof)
            
        })
        setModalEdit(true)
    }

    const handleOk = async() => {
        
        setModalEdit(false)
       await axios.post('https://hrglory.herokuapp.com/api/hr/employee/edit',{
            employeeId:employeeId,
            employeeFirstName: employeeFristName,
            employeeLastName: employeeLastName,
            employeeDob: dateOfBirth,
            employeeGender: gender,
            employeeContact: mobileNumber,
            employeeEmail: emailID,
            employeeAddress: employeeAddress,
            employeeAlternateContact: alternateMobileNumber,
            employeePerviousCompanyName: companyName,
            employeePerviousCompanyAddress: companyAddress,
            employeePerviousCompanyJoinDate: dateOfJoining,
            employeePerviousCompanyEndDate: dateOfLeaveing,
            employeeIdProof: identityProof
        })
            .then(response=>{
                console.log('edited',response)
                message.success('updated!')
                setAllDelete('Data update')
                 setemployeeFristName('first name')
                setemployeeLastName('last name')
                setdateOfBirth('dob')
                setgender('set gender')
                setmobileNumber('mobile no')
                setemailID('email id')
                setemployeeAddress('employee address')
                setalternateMobileNumber('alternate no')
                setcompanyName('company name')
                setcompanyAddress('company address')
                setdateOfJoining('joining date')
                setdateOfLeaveing('leaving date')
                setidentityProof('identity proof')



            })
            .catch(error=>{
                message.error('error')
            })
      };
    
    const handleSeemoreOK=()=>{
        setIsModalVisible(false);
    }
    const handleCancel = () => {
        setIsModalVisible(false);
        setModalEdit(false)
        
      };
    const handleConfirmCancel=()=>{
        setModalConfirm(false)
    }
    const handleSend=()=>{
        Modal.success({
            content:'Send'
        })
        setModalConfirm(false)
    }

      const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    };
     
    // useEffect(()=>{
    //     return()=>{
    //         history.go(1)
    //     }
    // },[])
    
    useEffect((e)=>{
        async function fetchAPI(){
            let response = await axios.get('https://hrglory.herokuapp.com/api/hr/employee/getAllEmployee')
            .then(response=>{
                console.log('response', response.data.data)
                setAllData(response.data.data)
                
            })
        }
        fetchAPI()
        return()=>{
            history.goForward()
        }
        
      
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

    
    const handleLogout=()=>{
        history.push('/LoginPage')
    }
    const handleEmployeeStatus = ()=>{
        setIsEmployee(false)
        setIsEmployeeStatus(true)
        setisRequestLeave(false)
      // history.push('/EmployeeStatus')
    };
    const handleEmployee = ()=>{
        setIsEmployee(true)
        setIsEmployeeStatus(false)
        setisRequestLeave(false)
      // history.push('/EmployeeStatus')
    };
    const handleRequestLeave = ()=>{
        setIsEmployee(false)
        setIsEmployeeStatus(false)
        setisRequestLeave(true)
        //history.push('/RequestLeave')
    };
    
    // console.log('employee firstname',employeeFristName)
    // console.log('employee lastname',employeeLastName)
    // console.log('dob',dateOfBirth)
    // console.log('gender',gender)
    // console.log('mobile',mobileNumber)
    // console.log('emailID',emailID)
    // console.log('employee address',employeeAddress)
    // console.log('Date of joining',dateOfJoining)
    // console.log('Date of leaving',dateOfLeaveing);
    

    
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
                                <Menu.Item key="1" icon={<UserOutlined />} title="Employee 1" onClick={handleEmployee} >
                                    Employee 
                                </Menu.Item>
                               <Menu.Item key='2'  icon={<UserOutlined/>} onClick={handleEmployeeStatus}>
                                    Employee Status    
                                
                               </Menu.Item>
                               <Menu.Item icon={<UserOutlined/>} onClick={handleRequestLeave}>
                                    Request Leave
                                   {/* <Button>Request Leave</Button> */}
                               </Menu.Item>
                                <Menu.Item>
                                    <Button onClick={handleLogout}>Logout</Button>
                                </Menu.Item>


                                
                                </Menu>
                            </Sider>
                            {isEmployee?
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
                                    <Column title='Action'  dataIndex='employeeId' render={(e,record) => (
                                            <Space>
                                                <Button  onClick={()=>{ showEdit(e)}}>Edit</Button>
                                                <Button onClick={()=>{handleSeeMore(e); console.log('E',e);setSeeMore(true);console.log('see more',isSeeMore);showModal(e);console.log('single', singleDetail)}}>See more </Button>
                                                        
                                                <a><Button  onClick={()=>{handleDelete(e); console.log('All date',e)}}>Delete</Button></a>
                                                <Button onClick={()=>setModalConfirm(true)}>Confirm</Button>
                                            </Space>
  
                                           
                                           
                                          )}></Column>
                                   
                                    
                             
                                        
                                     
                                    
                                </Table>
                                <Modal title='More Information' visible={isModalVisible} onOk={handleSeemoreOK} onCancel={handleCancel} width={2000}>
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

                                   <Modal title='To Edit' visible={isModalEdit} onOk={handleOk} onCancel={handleCancel} width={2000}>
                                  
                                        <Form.Item >
                                            <Input placeholder='First name' value={employeeFristName} defaultValue={employeeFristName} onChange={(e)=>setemployeeFristName(e.target.value)}></Input>
                                        </Form.Item>
                                        <Form.Item>
                                            <Input placeholder='Last name' value={employeeLastName} defaultValue={employeeLastName} onChange={(e)=>setemployeeLastName(e.target.value)}></Input>
                                        </Form.Item>
                                        <Form.Item>
                                            <DatePicker placeholder='dob' value={moment(dateOfBirth)} onChange={(dateString)=>setdateOfBirth(dateString)}></DatePicker>
                                        </Form.Item>
                                        <Form.Item>

                                        <Select
                                            placeholder="Select a option and change input text above"
                                            onChange={(e) => { setgender(e) }}
                                            defaultValue={gender}
                                            value={gender}
                                        >
                                            <Option value="male">male</Option>
                                            <Option value="female">female</Option>
                                            <Option value="other">other</Option>
                                        </Select>
                                        </Form.Item>
                                        <Form.Item>
                                            <Input placeholder='Phone number' value={mobileNumber} defaultValue={mobileNumber} onChange={(e)=>setmobileNumber(e.target.value)}></Input>
                                        </Form.Item>
                                        <Form.Item>
                                            <Input placeholder='Email' value={emailID} defaultValue={emailID} onChange={(e)=>setemailID(e.target.value)}></Input>
                                        </Form.Item>
                                        <Form.Item>
                                            <Input placeholder='Employee address' value={employeeAddress} defaultValue={employeeAddress} onChange={(e)=>setemployeeAddress(e.target.value)}></Input>
                                        </Form.Item>
                                        <Form.Item>
                                            <Input placeholder='alternate number' value={alternateMobileNumber} defaultValue={alternateMobileNumber} onChange={(e)=>setalternateMobileNumber(e.target.value)}></Input>
                                        </Form.Item>
                                        <Form.Item>
                                            <Input placeholder='company name' value={companyName} defaultValue={companyName} onChange={(e)=>setcompanyName(e.target.value)}></Input>
                                        </Form.Item>
                                        
                                        <Form.Item>
                                            <TextArea rows={2} placeholder='company address' value={companyAddress} defaultValue={companyAddress} onChange={(e)=>setcompanyAddress(e.target.value)} ></TextArea>
                                        </Form.Item>
                                        <Form.Item>
                                            <DatePicker placeholder='Joining date' value={moment(dateOfJoining)} defaultValue={dateOfJoining} onChange={(dateString)=>setdateOfJoining(dateString)}></DatePicker>
                                        </Form.Item>
                                        <Form.Item>
                                            <DatePicker placeholder='Leavinig date' value={moment(dateOfLeaveing)} defaultValue={dateOfLeaveing} onChange={(dateString)=>setdateOfLeaveing(dateString)}></DatePicker>
                                        </Form.Item>
                                        <Form.Item>
                                            <Upload  customRequest={dummyRequest}
                                                     onChange={(e) => {console.log("info", e.file);}}><Button>Select</Button></Upload>
                                        </Form.Item>

                                   </Modal>
                            
                                   <Modal title='Email and Password' visible={isModalConfirm} onCancel={handleConfirmCancel} okText='Send' onOk={handleSend}>
                                       <Form.Item
                                        label='Email'
                                        name='Email'
                                        rules={[
                                            {
                                                required:true,
                                                message:'Please enter email'
                                            }
                                        ]}
                                       >
                                           <Input></Input>
                                       </Form.Item>
                                       <Form.Item
                                       label='Password'
                                       name='password'
                                       rules={[
                                           {
                                               required:true,
                                               message:'Please enter password'
                                           }
                                       ]}
                                       >
                                        <Input.Password></Input.Password>
                                       </Form.Item>
                                   </Modal>
                                    <Route exact path='/EmployeeStatus' component={EmployeeStatus}></Route>
                               
                                </Content>
                            </Layout>:isEmployeeStatus?<EmployeeStatus/>:isRequestLeave?<RequestLeave />:''}
                </Layout>
            </Layout>
        </>
    )
}



export default DashBoard;   