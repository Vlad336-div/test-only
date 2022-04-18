interface IButtonProps {
  text: string;
  style?: Record<string, string>;
  click?: () => void;
  disabled?: boolean;
}