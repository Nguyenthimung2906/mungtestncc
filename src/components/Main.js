import React, { useState } from "react";
import "./styles.css";
import { MenuUnfoldOutlined } from "@ant-design/icons";

const Main = () => {

  return (
    <div className="displayFlexApp">
      <label htmlFor="menu__input">  <MenuUnfoldOutlined className=" menu__icon header__icon" /></label>

      <input type="checkbox" name="" id="menu__input" className="menu__input" />
      <label htmlFor="menu__input" className="nav__overlay"></label>
      <div className="navbar">
        <ul className="nav-list">
          <li className="nav--item">Home</li>
          <li className="nav--item">Services</li>
          <li className="nav--item active">News</li>
          <li className="nav--item">Blog</li>
          <li className="nav--item">Contact</li>
        </ul>
      </div>
      <div className="nav-list-hidden">
        <ul >
          <li className="nav--hidden--item">Home</li>
          <li className="nav--hidden--item">Services</li>
          <li className="nav--hidden--item active">News</li>
          <li className="nav--hidden--item">Blog</li>
          <li className="nav--hidden--item">Contact</li>
        </ul>
      </div>
      <div className="textAlignCenter content">
        <div className="imageLogo">
        </div>
        <div className="content--header">
          <b>Lorem ipsum dolor sit asmet?</b>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique consequat placerat. Vestibulum auctor pellentesque sem, eu
            posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
            facilisis, ligula in mattis sodales, augue justo tristique nulla,
            sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
            mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
            convallis. Quisque suscipit maximus vestibulum. Phasellus congue
            mollis orci, sit amet luctus augue tristique eu. Donec vulputate
            odio neque, sed semper turpis pellentesque a.
          </p>
        </div>
        <div className="displayFlex list--news grid row">
          <div className="news--item col c-12 m-6 l-4">
            <b>Lorem ipsum dolor sit amet</b>
            <div className="item">
              <div className="image--news image--news--1"></div>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at ullamcorper ultricies. Donec feugiat
                velit nulla, vel sodales est ullamcorper id. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices vestibulum mattis.
              </p>
            </div>
          </div>
          <div className="news--item col c-12 m-6 l-4">
            <b>Lorem ipsum dolor sit amet</b>
            <div className="item">
              <div className="image--news image--news--2"></div>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at ullamcorper ultricies. Donec feugiat
                velit nulla, vel sodales est ullamcorper id. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices vestibulum mattis.
              </p>
            </div>
          </div>
          <div className="news--item col c-12 m-6 l-4">
            <b>Lorem ipsum dolor sit amet</b>
            <div className="item">
              <div className="image--news  image--news--3"></div>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at ullamcorper ultricies. Donec feugiat
                velit nulla, vel sodales est ullamcorper id. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices vestibulum mattis.
              </p>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>Copyright @2021</p>
        </div>
      </div>

    </div>
  );
};

export default Main;
