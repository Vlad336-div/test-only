import React, {useEffect} from 'react';
import styled from "styled-components"
import Button from "../../components/Button/Button";
import {useNavigate} from "react-router-dom"

const Profile = (): JSX.Element => {

  const navigate = useNavigate()

  const signOut = () => {
    localStorage.setItem('auth', 'false')
    localStorage.setItem('remember', 'false')
    localStorage.setItem('login', '')
    navigate('/login')
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('remember')!)) return
    localStorage.setItem('auth', 'false')
  })

  return (
    <WrapProfile>
      <p>Здравствуйте, <span>steve.jobs@example.com</span></p>
      <Button
        text="Выйти"
        style={{
          display: "inline-block",
          padding: "20px 70px",
          background: "#f5f5f5",
          color: "#000",
          width: "auto",
          marginTop: "40px"
        }}
        click={signOut}
      />
    </WrapProfile>
  );
};

const WrapProfile = styled.div`
  font-size: 40px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  & span {
    font-weight: 700;
  }
`

export default Profile;