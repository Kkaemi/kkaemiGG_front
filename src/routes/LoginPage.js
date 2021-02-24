import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Divider } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

import "./LoginPage.css";

class LoginPage extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-form-container">
          <div className="logo">KKAEMI.GG</div>
          간편 로그인
          <div className="easy-login">
            <Button size="large" block>
              <GoogleOutlined />
              Google 로그인
            </Button>
          </div>
          <Divider></Divider>
          이메일 로그인
          <Form>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "이메일을 입력해 주세요" }]}
            >
              <label>이메일</label>
              <Input></Input>
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "비밀번호를 입력해 주세요" }]}
            >
              <label>비밀번호</label>
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                className="login-form-button"
              >
                로그인
              </Button>
            </Form.Item>
          </Form>
          <div style={{ textAlign: "center" }}>
            처음 방문하셨나요?&ensp;
            <Link to="/register">회원가입하기</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
