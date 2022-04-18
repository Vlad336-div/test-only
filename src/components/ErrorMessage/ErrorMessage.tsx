import React from 'react';
import {ReactComponent as IconError} from "../../assets/iconError.svg";
import {WrapErrorMessage} from "./styles";

const ErrorMessage = ({style = {}, message}: IErrorMessageProps): JSX.Element => {
  return (
    <WrapErrorMessage style={style}>
      <IconError/>
      <p>{message}</p>
    </WrapErrorMessage>
  );
};

export default ErrorMessage;