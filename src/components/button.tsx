import * as React from 'react';

interface ButtonProps{
  id?: string;
  size?: 'sm' | 'lg';
  text: string;
  onClick?: any;
}

class Button extends React.Component<ButtonProps, {}> {
  render() {
    let {id, size, text, onClick} = this.props;
    if (!size) size = "sm";
    return (  
      <button id={id? id: text} onClick={onClick} className={"button button-"+size}>{text}</button>
    )
  }
}

export default Button;