import React from "react";
import logo from "../assets/logo.png";
import { CustomConnectKitButton } from "./buttons/CustomConnectKitButton";
const Header = () => {
  return (
    <div className="h-24 px-8 flex items-center justify-between">
      <img src={logo} className="h-full" alt="logo" />
      <CustomConnectKitButton />
    </div>
  );
};

export default Header;
