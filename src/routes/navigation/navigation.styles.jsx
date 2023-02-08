import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  position: fixed;
  //background-color: white;
  background: linear-gradient(to right, rgb(200, 200, 200), rgb(127, 127, 127));
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

  @media screen and (max-width: 800px) {
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    position: fixed;
    background: linear-gradient(to right, rgb(200, 200, 200), rgb(127, 127, 127));
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }  

`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 15px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  // @media screen and (max-width: 800px) {
  //   width: 50%;
  //   height: 100%;
  //   display: flex;
  //   align-items: center;
  //   justify-content: flex-end;
  // }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  // @media screen and (max-width: 800px) {

  // }
`;
