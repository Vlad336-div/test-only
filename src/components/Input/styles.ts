import styled from "styled-components"

export const WrapInput = styled.div<IInputStyleProps>`
  margin-bottom: 20px;
  
  & input {
    width: 640px;
    padding: 20px;
    border-radius: 8px;
    background: #f5f5f5;
    border: ${props => props.error ? "1px solid #E26F6F" : "none"};
    font-family: 'Helvetica Neue Cyr', sans-serif;
    color: #232323;
    box-sizing: border-box;
    
    &:focus {
      outline: none;
    }
  }
`

export const Placeholder = styled.label`
  margin-bottom: 10px;
  color: #1F1F1F;
  cursor: pointer;
  display: block;
`