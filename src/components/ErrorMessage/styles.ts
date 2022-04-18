import styled from "styled-components"

export const WrapErrorMessage = styled.div`
  display: flex;
  align-items: center;
  background: #F5E9E9;
  border: 1px solid #E26F6F;
  border-radius: 8px;
  padding: 20px;
  
  & svg {
    width: 20px;
    height: 20px;
    margin-right: 15px;
  }
  
  & p {
    color: #000;
    font-size: 14px;
  }
`