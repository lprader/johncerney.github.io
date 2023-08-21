import * as React from 'react';

interface PopupProps {
  header: string;
  subheader?: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}
 
class Popup extends React.Component<PopupProps> {
  closeOverlay = () => {
    let overlay = document.getElementById('transparent-overlay');
    let popup = document.getElementById('popup');
    if (overlay)
      overlay.style.visibility = "hidden";
    if (popup)
      popup.style.visibility = "hidden";
  }

  render() { 
    const {buttonLink,buttonText,header,text,subheader} = this.props;
    return ( 
      <div id='transparent-overlay' onClick={() => this.closeOverlay()}>
        <div id='popup'>
            <div id='close-button' onClick={() => this.closeOverlay()}></div>
            <h1>{header}</h1>
            {(subheader)? <h2>{subheader}</h2> : null}
            <p>{text}</p>
            <center><a href={buttonLink}><div className='popupLink'>{buttonText}</div></a></center>
        </div>
      </div>
    );
  }
}
 
export default Popup;

