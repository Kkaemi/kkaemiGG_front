import React, { Component } from "react";
import CommunityBest from "./CommunityBest";
import "./Content.css";
import Logo from "../images/lol.png";

class Content extends Component {
  render() {
    return (
      <div className="container">
        <div className="index-logo">
          <div id="logo">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <form
          className="summoner-search-form"
          action="/summoner/"
          autoComplete="off"
        >
          <input
            type="text"
            name="userName"
            className="summoner-search-form__text _suggest"
            placeholder="소환사명을 입력해 주세요"
            autoComplete="off"
          />
          <button type="submit" className="summoner-search-form__button">
            .GG
          </button>
        </form>
        <CommunityBest></CommunityBest>
      </div>
    );
  }
}

export default Content;
