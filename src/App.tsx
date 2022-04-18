import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Router from "./router";
import Logo from "./components/Logo/Logo"
import styled from "styled-components"

const App = (): JSX.Element => {
  return (
    <WrapApp>
      <WrapLogo>
        <Logo/>
      </WrapLogo>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </WrapApp>
  );
};

const WrapApp = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const WrapLogo = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 40px;
`

export default App;
