import { useEffect, useState } from "react";
import React from "react";
import {Form,Input,Button, Card,Space, message} from 'antd';
import Title from "antd/lib/typography/Title";
import axios from 'axios';
import 'antd/dist/antd.css';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import background from '../Images/bg.png'
import DashBoard from './DashBoard'
import {useHistory} from 'react-router-dom'

const LoginPage=()=>{
    let history = useHistory()
    const[username,setUserName]=useState('')
    const[password,setPassword]=useState('')
    const handleSubmit=(e)=>{
    
        const response = axios.post('https://hrglory.herokuapp.com/api/hr/employee/login',{
            user_name:username,
            password:password
        })
        .then(response=>{
            console.log('response',response)
            console.log('username',username)
            console.log('password',password)
            if(username == 'admin' && password=='admin' &&response.data.error == false ){
                message.success('Login')
                history.push('/DashBoard')
            }
            else if(username=='admin' && password.length>5){
                message.error('You are not admin')
            }
            else{
                message.success('employee login')
                console.log('response.data.error', response.data.error)
                history.push('/UserDashBoard')
            }
            // if(response.data.error == false){
            //     message.success('Login')
            //     history.replace('/DashBoard')
            
            // }
            // else if(response.data.error == true){
            //     message.error('error occured')
            // }
        })
        
        
    }
    const handleCancel=()=>{
        history.push('/')
    }
    useEffect(()=>{
        return()=>{
            history.goForward()
        }
    })
    return(
        <>
            <Layout style={{backgroundImage:`url(${background})`, height: '100vh', backgroundSize: 'cover', position: 'sticky', top: '50%', left: '50%'}}>
       
                    <Card style={{marginRight:400,marginLeft:400,marginTop:150,backgroundColor:'aliceblue',borderRadius:20}}>
                        
                            <Form >
                                <Title style={{ fontFamily: 'Berkshire Swash', marginTop: 10 }}>Login</Title>
                                <Form.Item 
                                    label='Username' 
                                    name='username'
                                    rules={[
                                        {
                                        required: true,
                                        message:'Please enter username'
                                        }
                                    ]}>
                                    
                                    <Input  defaultValue={username} onChange={(e)=>setUserName(e.target.value)} ></Input>
                                </Form.Item>
                                <Form.Item 
                                    label='Password' 
                                    name='password'
                                    rules={[
                                        {
                                        required: true,
                                        message:'Please enter password'
                                        }
                                    ]}>
                                    <Input.Password onChange={(e)=>setPassword(e.target.value)}></Input.Password>
                                </Form.Item>
                                <Form.Item>
                                    <Space>
                                            <Button type='primary' htmlType='submit' onClick={(e)=>handleSubmit(e)}>Submit</Button>
                                        
                                            <Button onClick={handleCancel}>Cancel</Button>
                                    </Space>
                                </Form.Item>
                            </Form>
                            
                    </Card>

            </Layout>
   
   
        </>
                
    )
}

export default LoginPage;