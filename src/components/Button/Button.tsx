import React from 'react';
import {ButtonStyled} from "./styles"

const Button = ({
  text,
  disabled=false,
  style={},
  click=(() => console.log('click'))
}: IButtonProps): JSX.Element => {
  return <ButtonStyled
    value={text}
    style={style}
    type="submit"
    disabled={disabled}
    onClick={click}
  />
};

export default Button;