interface IInputProps {
  placeholder?: string;
  type?: string;
  name?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  errorRequired?: boolean;
}

interface IInputStyleProps {
  error?: boolean;
}