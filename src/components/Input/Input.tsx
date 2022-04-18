import React from 'react';
import {WrapInput, Placeholder} from "./styles";
import ErrorInput from "../ErrorInput/ErrorInput";

const Input = React.forwardRef(({
  type = "",
  placeholder = "",
  errorRequired = false,
  name="",
  onChange,
  onBlur=(e => console.log(e, 'default'))
}: IInputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
  return (
    <WrapInput error={errorRequired}>
      <Placeholder htmlFor={name}>{placeholder}</Placeholder>
      <input
        ref={ref}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        id={name}
      />
      {
        errorRequired && <ErrorInput>Обязательное поле</ErrorInput>
      }
    </WrapInput>
  );
});

export default Input;