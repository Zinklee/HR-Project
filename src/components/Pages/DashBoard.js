import React, { useState,useEffect } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Button , Collapse, Modal, InputNumber,Input, DatePicker,Select, Upload, message
} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Table,Tag,Space } from "antd";
import axios from 'axios';
import { Form } from "antd";
import TextArea from 'antd/lib/input/TextArea';
const { Column, ColumnGroup } = Table;
const { Header, Content, Sider } = Layout;
const { Option } = Select;


function DashBoard(){
    const[allData,setAllData] = useState([])
    const[allDelete,setAllDelete]=useState([])
    const[isSeeMore,setSeeMore]=useState(false)
    const[singleDetail,setSingleDetail]=useState({})
    const[isModalVisible, setIsModalVisible] = useState(false);
    const[isModalEdit,setModalEdit]=useState(false);
    const[form]=Form.useForm();
    const[editkey,setEditKey]=useState('')
    const isEditing = (record)=> record.key===editkey

    const[employeeId,setEmployeeId]=useState('')
    const [employeeFristName, setemployeeFristName] = useState('hello')
    const [employeeLastName, setemployeeLastName] = useState('last name')
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

    

    const showModal = (e) => {
        setIsModalVisible(true);
        // setModalEdit(true)
      };
    const showEdit=(e)=>{
        console.log('whole', e)
        axios.put(`https://hrglory.herokuapp.com/api/hr/employee/${e}/details`)
        .then(response=>{
            console.log('Response', response.data.data.employeeFirstName)
            console.log('last name',response.data.data.employeeLastName)
            setEmployeeId(response.data.data.employeeId)
            setemployeeFristName(response.data.data.employeeFirstName)
            setemployeeLastName(response.data.data.employeeLastName)
            setdateOfBirth(response.data.data.employeeDob)
            setgender(response.data.data.employeeGender)
            setmobileNumber(response.data.data.employeeContact)
            setemailID(response.data.data.employeeEmail)
            setemployeeAddress(response.data.data.employeeAddress)
            setalternateMobileNumber(response.data.data.employeeAlternateContac)
            setcompanyName(response.data.data.employeePerviousCompanyName)
            setcompanyAddress(response.data.data.employeePerviousCompanyAddress)
            setdateOfJoining(response.data.data.employeePerviousCompanyJoinDate)
            setdateOfLeaveing(response.data.data.employeePerviousCompanyEndDate)
            setidentityProof(response.data.data.employeeIdProof)
            
        })
        setModalEdit(true)
    }

    const handleOk = () => {
        setIsModalVisible(false);
        setModalEdit(false)
        axios.post('https://hrglory.herokuapp.com/api/hr/employee/edit',{
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

            })
            .catch(error=>{
                message.error('error')
            })
      };
    

    const handleCancel = () => {
        setIsModalVisible(false);
        setModalEdit(false)
      };

      const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
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

    const handleEdit=(e)=>{
        
        form.setFieldsValue({
            employeeFirstName:'',
            employeeLastName:'',
            employeeDob:'',
            employeeGender:'',
            employeeContact:'',
            employeeEmail:'',
            employeeAddress:"", 
            ...e,

        })
        setEditKey(e.key)
        
    }
  
    
    console.log('employee firstname',employeeFristName)
    console.log('employee lastname',employeeLastName)
    console.log('dob',dateOfBirth)
    console.log('gender',gender)
    console.log('mobile',mobileNumber)
    console.log('emailID',emailID)
    console.log('employee address',employeeAddress)
    

    
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
                                    <Column title='Action'  dataIndex='employeeId' render={(e,record) => (
                                            <Space>
                                                <Button  onClick={()=>{handleEdit(record); showEdit(e)}}>Edit</Button>
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

                                   <Modal title='To Edit' visible={isModalEdit} onOk={handleOk} onCancel={handleCancel} width={2000}>
                                  
                                        <Form.Item>
                                            <Input placeholder='First name' defaultValue={employeeFristName} onChange={(e)=>setemployeeFristName(e.target.value)}></Input>
                                        </Form.Item>
                                        <Form.Item>
                                            <Input placeholder='Last name' defaultValue={employeeLastName} onChange={(e)=>setemployeeLastName(e.target.value)}></Input>
                                        </Form.Item>
                                        <Form.Item>
                                            <DatePicker placeholder='dob' ></DatePicker>
                                        </Form.Item>
                                        <Form.Item>

                                        <Select
                                            placeholder="Select a option and change input text above"
                                            // onChange={(e) => { genderHandleChange(e) }}
                                            defaultValue={gender}
                                            
                                        >
                                            <Option value="male">male</Option>
                                            <Option value="female">female</Option>
                                            <Option value="other">other</Option>
                                        </Select>
                                        </Form.Item>
                                        <Form.Item>
                                            <Input placeholder='Phone number' defaultValue={mobileNumber} onChange={(e)=>setmobileNumber(e.target.value)}></Input>
                                        </Form.Item>
                                        <Form.Item>
                                            <Input placeholder='Email'  defaultValue={emailID} onChange={(e)=>setemailID(e.target.value)}></Input>
                                        </Form.Item>
                                        <Form.Item>
                                            <Input placeholder='Employee address' defaultValue={employeeAddress} onChange={(e)=>setemployeeAddress(e.target.value)}></Input>
                                        </Form.Item>
                                        <Form.Item>
                                            <Input placeholder='alternate number' defaultValue={alternateMobileNumber} onChange={(e)=>setalternateMobileNumber(e.target.value)}></Input>
                                        </Form.Item>
                                        <Form.Item>
                                            <Input placeholder='company name'  defaultValue={companyName} onChange={(e)=>setcompanyName(e.target.value)}></Input>
                                        </Form.Item>
                                        
                                        <Form.Item>
                                            <TextArea rows={2} placeholder='company address' defaultValue={companyAddress} onChange={(e)=>setcompanyAddress(e.target.value)} ></TextArea>
                                        </Form.Item>
                                        <Form.Item>
                                            <DatePicker placeholder='Joining date' defaultValue={dateOfJoining} ></DatePicker>
                                        </Form.Item>
                                        <Form.Item>
                                            <DatePicker placeholder='Leavinig date' defaultValue={dateOfLeaveing} ></DatePicker>
                                        </Form.Item>
                                        <Form.Item>
                                            <Upload  customRequest={dummyRequest}
                                                     onChange={(e) => {console.log("info", e.file);}}><Button>Select</Button></Upload>
                                        </Form.Item>



                                        
                                     
                                        
                                        
                                        

                                   </Modal>
                                        
                               
                                </Content>
                            </Layout>
                </Layout>
            </Layout>
        </>
    )
}



export default DashBoard;   