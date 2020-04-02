import * as React from 'react';
export interface IButtonProps {
  children?: React.ReactNode,
  disabled?:boolean
  color: string
  clickflag :boolean
  onClick?: (clickflag:boolean) => void
  style?: {backgroundColor: string}
 
  
}
const styles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};
const Button: React.SFC<IButtonProps> = (props) => (
  <button disabled={props.disabled}  onClick={() =>{props.clickflag === true && ( alert("Button clicked"))}}  type="button">
    {props.children}
  </button>
);
Button.defaultProps = {
  children: null,
  onClick: () => {}
};
export default Button;