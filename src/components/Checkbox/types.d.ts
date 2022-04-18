interface ICheckboxProps {
  text: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: ChangeEvent<HTMLInputElement>) => void;
  style: Record<string, string>
}