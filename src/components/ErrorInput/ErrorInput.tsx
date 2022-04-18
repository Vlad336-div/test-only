import React from 'react';
import {WrapErrorInput} from "./styles";

const ErrorInput = ({children}: IErrorInputProps): JSX.Element => {
  return (
    <WrapErrorInput>
      <p>{children}</p>
    </WrapErrorInput>
  );
};

export default ErrorInput;