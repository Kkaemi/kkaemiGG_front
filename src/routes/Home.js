import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import "./Home.css";

import NavBar from "../components/NavBar";
import Content from "../components/Content";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <NavBar></NavBar>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["0"]}
          style={{ backgroundColor: "#5483e8", color: "#b3cdff" }}
        >
          <Menu.Item key="0">
            <Link to="/">전적검색</Link>
          </Menu.Item>
          <Menu.Item key="1">
            <Link to="/community">커뮤니티</Link>
          </Menu.Item>
        </Menu>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
