import * as React from 'react';
import Button from './button';

interface RadioButtonListProps{
  strings: string[];
  onUpdate: Function;
}

class RadioButtonList extends React.Component<RadioButtonListProps, {}> {
  constructor(props:any) {
    super(props);
  }
  onButtonClick = (str:string) => {
    this.props.onUpdate(str);
    let lastClicked = document.getElementsByClassName("active");
    if (lastClicked[0]) lastClicked[0].className = lastClicked[0].className.replace(" active", "");
    let clicked = document.getElementById(str);
    if (clicked) clicked.className += " active";
  }
  render() {
    const {strings} = this.props;
    return (
      <div className="radio-button-list">
        {strings.map((str, i) => {return (
          <Button 
            id={str}
            key={i} 
            text={str}
            onClick={() => {this.onButtonClick(str)}}
          />
        )})}
      </div>
    )
  }
}

export default RadioButtonList;