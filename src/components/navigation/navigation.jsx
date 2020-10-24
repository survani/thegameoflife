import React from "react";
import {Links, Logo, NavigationLinks} from "./style";
import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Logo> Conway's Game of Life </Logo>
        <NavigationLinks>
            <Links to="/game"> Game Page </Links>
            <Links to="/about"> About the Game of Life? </Links>
        </NavigationLinks>
    </>
  );
};

export default Navigation;
