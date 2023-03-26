import * as React from 'react';

interface ModalProps {
  imgUrl?: string;
  videoUrl?: string;
  toggleModalFunction: Function;
}
 
class Modal extends React.Component<ModalProps> {
  render() { 
    const {toggleModalFunction, imgUrl, videoUrl} = this.props;
    return ( 
    <div className='full-page-modal' onClick={() => toggleModalFunction(false)}>
      {(videoUrl)?  <iframe width="900" height="507" src={videoUrl} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : null}
      {(imgUrl)? <img src={imgUrl} alt="" /> : null}
    </div> 
    );
  }
}
 
export default Modal;