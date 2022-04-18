import styled from "styled-components"

export const ButtonStyled = styled.input`
  display: block;
  width: 100%;
  padding: 20px 0;
  background: ${props => props.disabled ? "#99A9FF" : "#4A67FF"};
  transition: all 0.2s;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  font-family: 'Helvetica Neue Cyr', sans-serif;
  border: none;
  cursor: ${props => props.disabled ? "default" : "pointer"};
  border-radius: 8px;
`