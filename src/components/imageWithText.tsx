import * as React from 'react';

interface ImageWithTextProps{
  imgAlign: "right" | "left";
  imgUrl: string;
  imgWidth?: string;
  text: string[];
}

class ImageWithText extends React.Component<ImageWithTextProps, {}> {
  render() {
    const {imgAlign, imgUrl, imgWidth, text} = this.props;
    return (  
      <div>
        <img className={imgAlign + '-inline-img'} width={imgWidth? imgWidth : "250px"} src={imgUrl} />
        <div className='inline-text'>
          {text.map((str, i) => (<p key={i}>{str}</p>))}
        </div>
      </div>
    );
  }
}

export default ImageWithText;