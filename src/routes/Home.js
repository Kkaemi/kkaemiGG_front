import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Menu } from "antd";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <>
        <NavBar></NavBar>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["0"]}
          style={{ backgroundColor: "#5483e8", color: "#b3cdff" }}
        >
          <Menu.Item key="0">전적검색</Menu.Item>
          <Menu.Item key="1">커뮤니티</Menu.Item>
        </Menu>
        <Footer></Footer>
      </>
    );
  }
}

export default Home;
