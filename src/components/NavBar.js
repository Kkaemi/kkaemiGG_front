import React, { Component } from "react";
import { Menu, Button } from "antd";
import "./NavBar.css";
import LoL from "../images/lol.png";
import Maplestory from "../images/maplestory.png";

class NavBar extends Component {
  render() {
    return (
      <nav className="menu">
        <div className="menu__logo">
          <a href="/">KKAEMI.GG</a>
        </div>
        <div className="menu__container">
          <div className="nav__item nav__item--default">
            <img className="icon" src={LoL} alt="lol" />
            <span>리그오브레전드</span>
          </div>
          <div className="nav__item">
            <img className="icon" src={Maplestory} alt="maplestory" />
            <span>메이플스토리</span>
          </div>
        </div>
        <div className="button-group">
          <Button type="primary">로그인</Button>
        </div>
      </nav>
    );
  }
}

export default NavBar;
