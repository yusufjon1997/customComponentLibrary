/// <reference types="react" />
import './Button.scss';
interface ButtonType {
    name: string;
    onClick: () => void;
    type: 'primary' | 'warning' | 'success';
    outline: boolean;
}
declare function Button({ name, type, outline, onClick }: ButtonType): JSX.Element;
export default Button;
