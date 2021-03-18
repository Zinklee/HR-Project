import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Typography, Card, Select, DatePicker, Upload, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import { useHistory } from 'react-router';
import moment from 'moment';

const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;



const submitHandler = () => {
    console.log("submit1")
}

function Employement() {
    let history = useHistory();
    
    const [isFresher, setIsFresher] = useState(false)
    const [isBasicDetalis, setisBasicDetalis] = useState(true)
    const [isContactDetalis, setisContactDetalis] = useState(false)
    const [isEmployment, setisEmployment] = useState(false)
    const [isIndetity, setisIndetity] = useState(false)

    return (
        <>{isBasicDetalis ?
            <Card>
                <Card>
                    <Form name='employee-form' className='employee'>
                        <Title>Basic Detalis</Title>
                        <Form.Item
                            name='First-name'
                            label='First-name'
                            rules={[
                                {
                                    required: true,
                                    message: 'This field cannot be empty'
                                }
                            ]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name='Last-name'
                            label='Last-name'
                            rules={[
                                {
                                    required: true,
                                    message: 'This field cannot be empty'
                                }
                            ]}>
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <DatePicker defaultValue={moment('01/01/2015')} format={'DD/MM/YYYY'} />
                        </Form.Item>
                        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                            <Select
                                placeholder="Select a option and change input text above"
                            >
                                <Option value="male">male</Option>
                                <Option value="female">female</Option>
                                <Option value="other">other</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' onClick={() => { setisBasicDetalis(false); setisContactDetalis(true) }}>Next</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Card>
            : isContactDetalis
                ?
                <Card>
                    <Card>
                        <Form name='Contact-Information'>
                            <Title>Contact Detalis</Title>
                            <Form.Item
                                name="phone"
                                label="Phone Number"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your phone number!',
                                        type: 'number'
                                    }
                                ]}
                            >
                                <Input addonBefore={'+91'} />
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
                                <Input />
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
                                <TextArea rows={4} />
                            </Form.Item>
                            <Form.Item
                                name="alternate-Phone-Number"
                                label="alternate Phone Number"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your phone number!',
                                        type: 'number'
                                    }
                                ]}
                            >
                                <Input addonBefore={'+91'} />
                            </Form.Item>
                            <Form.Item>
                                <Button type='primary' onClick={() => { setisBasicDetalis(true); setisContactDetalis(false) }}>Previous</Button>
                                <Button type='primary' onClick={() => { setisContactDetalis(false); setisEmployment(true) }}>Next</Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Card>
                : isEmployment ?
                    <Card>
                        <Form name='employee-form' className='employee'>
                            <Title>Employment Detalis</Title>
                            <Form.Item>
                                <Checkbox onChange={(e) => setIsFresher(e.target.checked)} checked={isFresher}>Fresher</Checkbox>
                                {isFresher ? null : <Card >
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
                                            <Input />
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
                                            <TextArea rows={4} />
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
                                            <RangePicker />
                                        </Form.Item>
                                    </Form>
                                </Card>}
                                <Form.Item>
                                    <Button type='primary' onClick={() => { setisContactDetalis(true); setisEmployment(false) }}>Previous</Button>
                                    <Button type='primary' onClick={() => { setisEmployment(false); setisIndetity(true) }}>Next</Button>
                                </Form.Item>
                            </Form.Item>
                        </Form>
                    </Card>
                    : isIndetity ?
                        <Card>
                            <Card>
                                <Form name='Contact-Information'>
                                    <Title>Identity Proof </Title>
                                    <Form.Item>
                                        
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type='primary' onClick={() => { setisEmployment(true); setisIndetity(false) }}>Previous</Button>
                                        <Button type='primary' onClick={() => { submitHandler() }}>Submit</Button>
                                    </Form.Item>
                                </Form>
                            </Card>
                        </Card>
                        : <Card></Card>}
        </>
    )
}

export default Employement;