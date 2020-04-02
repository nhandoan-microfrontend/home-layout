import React, { Component } from "react";
import Logo from "../../component/Logo/Logo.component";
import HeaderItem from "../../component/HeaderItem/HeaderItem.component";
import { HeaderNav, HeaderContent, HeaderItemWrapper } from "./Header.style";

const Header = () => (
  <HeaderNav>
    <HeaderContent>
          <Logo />
          <HeaderItemWrapper>
            <HeaderItem>Home</HeaderItem>
            <HeaderItem>Templates</HeaderItem>
            <HeaderItem>Contact Us</HeaderItem>
          </HeaderItemWrapper>
        </HeaderContent>
  </HeaderNav>
);

export default Header;
