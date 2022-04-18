import React from 'react';
import {WrapCustomCheckbox, CheckboxHidden, CheckboxCustom} from "./styles";

const Checkbox = React.forwardRef(({
   style={},
   name="",
   onChange,
   text="",
   onBlur=(e => console.log(e, 'default'))
}: ICheckboxProps, ref: React.ForwardedRef<HTMLInputElement>): JSX.Element => {

  return (
    <WrapCustomCheckbox style={{...style}}>
      <CheckboxHidden
        ref={ref}
        type="checkbox"
        id={name}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label htmlFor={name}>
        <CheckboxCustom/>
        {text}
      </label>
    </WrapCustomCheckbox>
  );
});

export default Checkbox;