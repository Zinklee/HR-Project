import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import {Form,Input,Button, Card,Space, message,DatePicker,Modal} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { useHistory } from "react-router";
import moment from 'moment';

const { Header, Content, Footer } = Layout;
const { TextArea } = Input;
const {RangePicker} = DatePicker;
const {  Sider } = Layout;

function Leave(){
    const dateFormat = 'YYYY/MM/DD';
    let history= useHistory()
    const[Name,setName]=useState('')
    const[Reason,setReason]=useState('')
    const[date,setDate]=useState('')
    const[isSubmit,setSubmit]=useState(false)
    const[leave,setLeave]=useState(true)

    
    const handleButton=()=>{
        let s = true
       
        if(Name && Reason && date){
            s = false
           
        }
        else{
            s = true
        }
        setLeave(s)
        
    }
    const handleSubmit = (e) => {
        
        setSubmit(true)
        
        if(Name.length>0 && Reason.length>0&&date.length>0){
            Modal.success({
                content:'Leave send'
            })
           
        }
       
        
        
    }
   const  handleBack=()=>{
       history.push('/EmployeeStatus')

    }
    function disabledDate(current) {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
      }
      
    
    return(
        <>
            <Layout className="layout">
                
               <Layout>
               
                <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Leave</Breadcrumb.Item> 
                </Breadcrumb>
                <div className="site-layout-content">
                    
                    <Form.Item
                        label='Name'
                        name='name'
                        rules={[
                            {
                                required:true,
                                message:'Please enter your name'
                            }
                        ]}

                    >
                        <Input onChange={(e)=>{setName(e.target.value);handleButton()}}></Input>
                    </Form.Item>
                    <Form.Item
                        label='Reason'
                        name='reason'
                        rules={[
                            {
                                required:true,
                                message:'Reason must be there'
                            }
                        ]}
                    >
                        <TextArea rows={4} onChange={(e)=>{setReason(e.target.value);handleButton()}}></TextArea>
                    </Form.Item>
                    <Form.Item
                        label='From-To'
                        name='Leave Date'
                        rules={[
                            {
                                required:true,
                                message:'Select date'
                            }
                        ]}
                    >
                  
                    <RangePicker
                        disabledDate={disabledDate}
                        onChange={(dateString)=>{setDate(dateString)}}
                        defaultValue={[moment('2021/03/24', dateFormat), moment('2021/03/25', dateFormat)]}
                        format={dateFormat}
                    />

                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' disabled={leave} onClick={()=>{handleSubmit();console.log('name',Name);console.log('reason',Reason);console.log('date',date)}}>Submit</Button>
                    </Form.Item>
                </div>
                </Content>
                </Layout>
                
            </Layout>
        </>
    )

}


export default Leave;