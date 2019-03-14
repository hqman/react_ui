import React from 'react'

import { Form, Button, Icon, Input } from "antd";

import logo from '/images/logo.png'
const FormItem = Form.Item;

const LoginForm = ({ login, form }) => {

  const onSubmit = event => {
    event.preventDefault();
    // console.log(form, form.userName, form.password);

    form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values.userName, login);
        login({
          variables: {
            userName: values.userName,
            password: values.password
          }
        });
      }
    });
  };

  const { getFieldDecorator } = form;

  return (
    <section className="form-v2-container">
      <div className="appInfo">
        <img className="appLogo" src={logo} alt="logo" />
      </div>


      <Form onSubmit={onSubmit} className="form-v1">

        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名或手机号!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名或手机号" autoFocus />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password" placeholder="密码" />
          )}
        </FormItem>


        <FormItem >
          <Button type="primary" htmlType="submit"
            style={{ marginRight: "10px", width: "100%" }}>
            登录
          </Button>

        </FormItem>
      </Form>
    </section >
  )


};
const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);


export default WrappedLoginForm