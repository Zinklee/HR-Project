import React, { useState } from 'react'
import background from '../Images/bg.png'
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Card, Select, DatePicker, Upload, message, Steps, PageHeader, Image, Menu, Divider } from 'antd'
import Title from 'antd/lib/typography/Title';
import moment from 'moment';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';

const { Step } = Steps;
const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;
const axios = require('axios');

const steps = [
    {
        title: 'Step 1',
        content: 'First-content',
    },
    {
        title: 'Step 2',
        content: 'Second-content',
    },
    {
        title: 'Step 3',
        content: 'Third-content',
    },
    {
        title: 'Step 4',
        content: 'Fourth-content'
    }
];



function Employement() {

    const [isFresher, setIsFresher] = useState(false)
    const [isBasicDetalis, setisBasicDetalis] = useState(true)
    const [isContactDetalis, setisContactDetalis] = useState(false)
    const [isEmployment, setisEmployment] = useState(false)
    const [isIndetity, setisIndetity] = useState(false)

    const [employeeFristName, setemployeeFristName] = useState('demo')
    const [employeeLastName, setemployeeLastName] = useState('deo')
    const [dateOfBirth, setdateOfBirth] = useState('demo')
    const [gender, setgender] = useState('')
    const [mobileNumber, setmobileNumber] = useState('')
    const [emailID, setemailID] = useState('')
    const [employeeAddress, setemployeeAddress] = useState('ujuu')
    const [alternateMobileNumber, setalternateMobileNumber] = useState('')
    const [companyName, setcompanyName] = useState('')
    const [companyAddress, setcompanyAddress] = useState('')
    const [dateOfJoining, setdateOfJoining] = useState('')
    const [dateOfLeaveing, setdateOfLeaveing] = useState('')
    const [identityProof, setidentityProof] = useState('abcd')
    const [firstDisable, setDisable] = useState(true)
    const [secondDisable, setSecondDisable] = useState(true)
    const [thirdDisable, setThirdDisable] = useState(true)
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };
    function genderHandleChange(value) {
        console.log('Gender', value)
        setgender(value)
        handleButton()
    }

    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    };

    const submitHandler = () => {
        axios.post('https://hrglory.herokuapp.com/api/hr/employee/createEmployee', {
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
            .then((response) => {
                console.log(response);
                message.success('Processing complete!')
                setisIndetity(false)
                setisBasicDetalis(true)
                setCurrent(0)


            }, (error) => {
                console.log(error);
                message.error('Something went wrong!')

            });
        // console.log("isFresher", isFresher)
        console.log("employeeFristName", employeeFristName)
        console.log("employeeLastName", employeeLastName)
        console.log("dateOfBirth", dateOfBirth)
        console.log("gender", gender)
        console.log("mobileNumber", mobileNumber)
        console.log("emailID", emailID)
        console.log("employeeAddress", employeeAddress)
        console.log("alternateMobileNumber", alternateMobileNumber)
        console.log("companyName", companyName)
        console.log("companyAddress", companyAddress)
        console.log("dateOfJoining", dateOfJoining)
        console.log("dateOfLeaveing", dateOfLeaveing)
        console.log("identityProof", identityProof)

    }

    const handleButton = () => {
        // console.log('Fresher',isFresher)
        // console.log('Firstname',employeeFristName.length)
        // console.log('Lastname',employeeLastName.length)
        // console.log('DOB',dateOfBirth.length)
        // console.log('Gender',gender.length)
        // console.log('company name',companyName.length)
        // console.log('company address',companyAddress.length)
        // console.log('date of joining',dateOfJoining.length)
        // console.log('employeeAdress',employeeAddress.length)
        // console.log('isFresher',isFresher)
        // console.log('alternateMobile',alternateMobileNumber.length)
        if (employeeFristName.length > 0 && employeeLastName.length > 0 && dateOfBirth.length > 0) {
            setDisable(false)

        }

        if (mobileNumber.length > 0 && emailID.length > 0 && employeeAddress.length > 0) {
            setSecondDisable(false)
        }


        if (companyName.length > 0 && companyAddress.length > 0) {
            setThirdDisable(false)
        }
        if (isFresher) {
            setThirdDisable(true)
        } else {
            setThirdDisable(false)
        }




    }


    return (
        <>

            <Layout style={{ backgroundImage: `url(${background})`, height: '100vh', backgroundSize: 'cover', position: 'sticky', top: '50%', left: '50%' }}>
                <center><div style={{ backgroundColor: '#E0F5F5', width: '50%', borderRadius: 20, marginTop: 20 }}><label style={{ fontSize: 30, color: "#191919", fontFamily: 'Berkshire Swash' }}> Register</label></div></center>
                <center style={{ marginTop: 30 }}>

                    <div style={{ justifyContent: 'center', flex: 1, width: '100%', alignContent: 'center' }}>
                        <Layout style={{ width: '50%', backgroundColor: '#e6fffb', borderRadius: 20, paddingLeft: 20, paddingRight: 20, paddingTop: 20 }} >

                            {/* <Content > */}

                            {/* <Card style={{backgroundColor:'#e6fffb' ,borderRadius:20,padding:0}}> */}
                            <Steps current={current}>
                                {steps.map(item => (
                                    <Step key={item.title} title={item.title} />
                                ))}
                            </Steps>

                            {isBasicDetalis ?

                                
                                <Form name='employee-form' className='employee' layout='horizontal' style={{ backgroundColor: '#e6fffb', marginTop: 15 }}>
                                    <Title style={{ fontFamily: 'Berkshire Swash', marginTop: 10 }}>Basic Details</Title>
                                    <div> 
                                    <Form.Item
                                        name='First-name'
                                        label='First-name'
                                        // style={{display:'inline-list-item', marginLeft:200}}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'This field cannot be empty'
                                            }
                                        ]}>
                                        <Input placeholder="Enter First Name"
                                            value={employeeFristName || ''}
                                            defaultValue={employeeFristName}
                                            // style={{display:'inline-block', width:'150px', marginRight:200 }}
                                            onChange={(e) => { setemployeeFristName(e.target.value); handleButton() }} />

                                    </Form.Item>
                                    </div>
                                    <Form.Item
                                        name='Last-name'
                                        label='Last-name'
                                        // style={{display:'inline-list-item', marginLeft:200}}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'This field cannot be empty'
                                            }
                                        ]}>
                                        <Input placeholder="Enter First Name"
                                            value={employeeLastName || ''}
                                            defaultValue={employeeLastName}
                                            // style={{display:'inline-block', width:'150px' ,marginRight:200}}
                                            onChange={(e) => { setemployeeLastName(e.target.value); handleButton() }} />
                                    </Form.Item>
                                    <label style={{marginRight:'85%',display:'inline-list-item'}}>Date of Birth: </label>
                                    <Form.Item style={{display:'inline-list-item', marginLeft:300}}>
                                       
                                        <DatePicker
                                            defaultValue={moment('01/01/2015')}
                                            format={'YYYY/MM/DD'}
                                            style={{display:'inline-block', width:'150px' ,marginRight:300}}
                                            onChange={(date, dateString) => { setdateOfBirth(dateString); handleButton() }} />
                                    </Form.Item>
                                    <Form.Item name="gender" label="Gender" rules={[{ required: true }]} style={{display:'inline-list-item'}}>
                                        <Select
                                            placeholder="Select a option and change input text above"
                                            onChange={(e) => { genderHandleChange(e) }}
                                            defaultValue={gender}
                                            // style={{display:'inline-block', width:'150px' ,marginRight:200}}
                                        >
                                            <Option value="male">male</Option>
                                            <Option value="female">female</Option>
                                            <Option value="other">other</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item>
                                        {/* <Button type='primary' disabled={firstDisable} onClick={() => { setisBasicDetalis(false); setisContactDetalis(true)}}>Next</Button> */}
                                        <div className="steps-action">
                                            
                                            {current < steps.length - 1 && (
                                                <Button type="primary" disabled={firstDisable} onClick={() => { next(); setisBasicDetalis(false); setisContactDetalis(true) }}>
                                                    Next
                                                </Button>
                                            )}
                                            
                                           
                                        </div>
                                    </Form.Item>
                                </Form>
                                

                                : isContactDetalis
                                    ?


                                    <Form name='Contact-Information' layout='horizontal' >
                                        <Title style={{ fontFamily: 'Berkshire Swash', marginTop: 10 }}>Contact Details</Title>
                                        <Form.Item
                                            name="phone"
                                            label="Phone Number"
                                            style={{display:'inline-list-item'}}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your phone number!',

                                                    pattern: new RegExp(/^[0-9\b]+$/)



                                                },
                                            ]}

                                        >
                                            <Input addonBefore={'+91'}
                                                placeholder="Enter Mobile Number"
                                                value={mobileNumber || ''}
                                                defaultValue={mobileNumber}
                                                maxLength={10}
                                                // style={{display:'inline-block', width:'150px' ,marginRight:150}}
                                                onChange={(e) => { setmobileNumber(e.target.value); handleButton(); }} />
                                        </Form.Item>
                                        <Form.Item
                                            name='Email-ID'
                                            label='Email-ID'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Enter you valid email id',
                                                    type: 'email'
                                                }
                                            ]}>
                                            <Input placeholder="Enter Email Id"
                                                value={emailID || ''}
                                                defaultValue={emailID}
                                                onChange={(e) => { setemailID(e.target.value); handleButton() }} />
                                        </Form.Item>
                                        <Form.Item
                                            name='Employee-Address'
                                            label='Employee-Address'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'This field cannot be empty'
                                                }
                                            ]}>
                                            <TextArea rows={2}
                                                placeholder="Enter Address "
                                                value={employeeAddress || ''}
                                                defaultValue={employeeAddress}
                                                onChange={(e) => { setemployeeAddress(e.target.value); handleButton() }}
                                                on />
                                        </Form.Item>
                                        <Form.Item
                                            name="Alternate-Phone-Number"
                                            label="Alternate Phone Number"
                                            rules={[
                                                {

                                                    message: 'Please input your phone number!',
                                                    pattern: new RegExp(/^[0-9\b]+$/),

                                                },

                                            ]}
                                        >
                                            <Input addonBefore={'+91'}
                                                placeholder="Enter Alternate Mobile Number"
                                                value={alternateMobileNumber || ''}
                                                defaultValue={alternateMobileNumber}
                                                maxLength={10}
                                                onChange={(e) => { setalternateMobileNumber(e.target.value); handleButton() }}

                                            />


                                            {/* <Button type='primary' onClick={() => { setisBasicDetalis(true); setisContactDetalis(false) }}>Previous</Button> */}
                                            {/* <Button type='primary'disabled={secondDisable} onClick={() => { setisContactDetalis(false); setisEmployment(true) }}>Next</Button> */}
                                            <div className="steps-action" style={{ marginTop: 30 }}>
                                                {current < steps.length - 1 && (
                                                    <Button style={{ margin: '0 8px' }} onClick={() => { prev(); setisBasicDetalis(true); setisContactDetalis(false) }}>
                                                        Previous
                                                    </Button>
                                                )}
                                                {current === steps.length - 1 && (
                                                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                                        Done
                                                    </Button>
                                                )}
                                                {current > 0 && (
                                                    
                                                    <Button type="primary" disabled={secondDisable} onClick={() => { next(); setisContactDetalis(false); setisEmployment(true) }}>
                                                        Next
                                                    </Button>
                                                )}
                                            </div>
                                        </Form.Item>
                                    </Form>


                                    : isEmployment ?

                                        <Form name='employee-form' layout='horizontal'>
                                            <Title style={{ fontFamily: 'Berkshire Swash', marginTop: 10 }}>Employment Details</Title>
                                            <Form.Item>
                                                <Checkbox onChange={(e) => { setIsFresher(e.target.checked); handleButton() }} checked={isFresher}>Fresher</Checkbox>
                                                {isFresher ? <Form.Item></Form.Item> :
                                                    <Form name='display-detail'>
                                                        <Form.Item
                                                            name='Company-name'
                                                            label='Company-name'
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: 'This field cannot be empty'
                                                                }
                                                            ]}>
                                                            <Input placeholder="Enter Company Name"
                                                                value={companyName || ''}
                                                                defaultValue={companyName}
                                                                onChange={(e) => { setcompanyName(e.target.value); handleButton() }} />
                                                        </Form.Item>
                                                        <Form.Item
                                                            name='Company-address'
                                                            label='Address'
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: 'This field cannot be empty'
                                                                }
                                                            ]}>
                                                            <TextArea rows={4}
                                                                placeholder="Enter Company Address"
                                                                value={companyAddress || ''}
                                                                defaultValue={companyAddress}
                                                                onChange={(e) => { setcompanyAddress(e.target.value); handleButton() }} />
                                                        </Form.Item>
                                                        <Form.Item
                                                            name='Date'
                                                            label='Joining/Leaving-Date'
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: 'This field cannot be empty'
                                                                }
                                                            ]}>
                                                            <RangePicker format={'YYYY/MM/DD'} onChange={(date, dateString) => { setdateOfJoining(dateString[0]); setdateOfLeaveing(dateString[1]) }} />
                                                        </Form.Item>
                                                    </Form>
                                                }
                                                <Form.Item>
                                                    {/* <Button type='primary' onClick={() => { setisContactDetalis(true); setisEmployment(false) }}>Previous</Button> */}
                                                    {/* <Button type='primary'disabled={thirdDisable} onClick={() => { setisEmployment(false); setisIndetity(true) }}>Next</Button> */}
                                                    <div className="steps-action">
                                                        {current < steps.length - 1 && (
                                                            
                                                            <Button style={{ margin: '0 8px' }} onClick={() => { prev(); setisContactDetalis(true); setisEmployment(false) }}>
                                                                Previous
                                                            </Button>
                                                        )}
                                                        {current === steps.length - 1 && (
                                                            <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                                                Done
                                                            </Button>
                                                        )}
                                                        {current > 0 && (
                                                            
                                                            <Button type="primary" disabled={thirdDisable} onClick={() => { next(); setisEmployment(false); setisIndetity(true) }}>
                                                                Next
                                                            </Button>
                                                        )}
                                                    </div>
                                                </Form.Item>
                                            </Form.Item>
                                        </Form>

                                        : isIndetity ?


                                            <Form name='Contact-Information'>
                                                <Title style={{ fontFamily: 'Berkshire Swash', marginTop: 10 }}>Identity Proof </Title>
                                                <Form.Item>
                                                    <Upload
                                                        customRequest={dummyRequest}
                                                        onChange={(e) => console.log("info", e.file)}
                                                    >
                                                        <Button>Choose File</Button>
                                                    </Upload>
                                                </Form.Item>
                                                <Form.Item>
                                                    {/* <Button type='primary' onClick={() => { setisEmployment(true); setisIndetity(false) }}>Previous</Button> */}
                                                    {/* <Button type='primary' onClick={() => { submitHandler() }}>Submit</Button> */}
                                                    <div className="steps-action">
                                                        {/* {current < steps.length - 1 && (
                                                    <Button type="primary" disabled={thirdDisable} onClick={() => {next();setisEmployment(false); setisIndetity(true)}}>
                                                        Next
                                                    </Button>
                                                    )} */}
                                                        {current === steps.length - 1 && (
                                                           
                                                            <Button style={{ margin: '0 8px' }} onClick={() => { prev(); setisEmployment(true); setisIndetity(false) }}>
                                                                Previous
                                                            </Button>
                                                        )}
                                                        {current > 0 && (
                                                            <Button type="primary" onClick={() => { submitHandler() }}>
                                                                Done
                                                            </Button>
                                                        )}
                                                    </div>
                                                </Form.Item>
                                            </Form>


                                            : <Card></Card>}



                            {/* </Content> */}

                        </Layout>
                    </div>
                </center>
            </Layout>
        </>
    )
}

export default Employement;