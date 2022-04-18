import styled from "styled-components"

export const WrapCustomCheckbox = styled.div``

export const CheckboxHidden = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;

  &:checked+label>div::before {
    background: #4A67FF;
  }

  &+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    color: #1F1F1F;
    cursor: pointer;
    position: relative;
    z-index: 3;
  }
`

export const CheckboxCustom = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid #000;
  border-radius: 4px;
  margin-right: 15px;
  cursor: pointer;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    transition: all 0.2s;
    background: #fff;
    border-radius: 2px;
    width: 12px;
    height: 12px;
  }
`