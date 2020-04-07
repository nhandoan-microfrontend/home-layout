import React from "react";
import Logo from "../../component/Logo/Logo.component";
import HeaderItem from "../../component/HeaderItem/HeaderItem.component";
import { HeaderNav, HeaderContent, HeaderItemWrapper, HeaderUserWrapper } from "./Header.style";
import Button from "../../component/Button/Button.component";

const Header = () => (
  <HeaderNav>
    <HeaderContent>
      <Logo />
      <HeaderItemWrapper>
        <HeaderItem>Home</HeaderItem>
        <HeaderItem>Templates</HeaderItem>
        <HeaderItem>Contact Us</HeaderItem>
      </HeaderItemWrapper>
      <HeaderUserWrapper>
        <HeaderItem>Log In</HeaderItem>
        <Button>
          Sign Up
        </Button>
      </HeaderUserWrapper>
    </HeaderContent>
  </HeaderNav>
);

export default Header;
