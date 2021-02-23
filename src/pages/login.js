import React, { useState } from 'react';
import Head from 'next/head';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import * as loginActions from '@actions/login-actions';

const layout = {
  posision: 'relative',
  paddingtop: 80,
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const taillayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [, setPassword] = useState();
  const [, setUserName] = useState();

  const handleInputFiled = (type, value) => {
    switch (type) {
      case 'userName':
        setUserName(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleLogin = (values) => {
    loginActions.login(values, dispatch, router);
  };

  return (
    <div>
      <Head>
        <title key="title">login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div style={{ display: 'grid', justifyItems: 'center' }}>
        <Form
          onFinish={handleLogin}
          layout={layout}
          name="basic"
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="账&nbsp;&nbsp;&nbsp;号"
            name="account"
            rules={[{ required: true, message: '请输入账号!' }]}
            onChange={(e) => {
              handleInputFiled('userName', e.target.value);
            }}
          >
            <Input style={{ left: 4, width: 220 }} />
          </Form.Item>
          <Form.Item
            label="密&nbsp;&nbsp;&nbsp;&nbsp;码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
            onChange={(e) => {
              handleInputFiled('password', e.target.value);
            }}
          >
            <Input.Password style={{ width: 220 }} />
          </Form.Item>
          <Form.Item taillayout={taillayout}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ margin: '0 auto', display: 'flex' }}
            >
              登&nbsp;&nbsp;&nbsp;录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
