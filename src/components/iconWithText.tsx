import * as React from 'react';

interface IconWithTextProps{
  link?: string;
  imgAltText: string;
  imgUrl: string;
  mainText: string;
  subText?: string;
}

class IconWithText extends React.Component<IconWithTextProps, {}> {
  render() {
    const {link, imgAltText, imgUrl, mainText, subText} = this.props;
    return (
      <div className="icon-with-text-container">
        <div><img src={imgUrl} alt={imgAltText}/></div>
        {link? (<a href={link} aria-label={`View site for ${mainText}`}><div className="description"><h3>{mainText}</h3>{subText? (<h4>{subText}</h4>) : null}</div></a>) 
        : (<div className="description"><h3>{mainText}</h3>{subText? (<h4>{subText}</h4>) : null}</div>)}
      </div>
    )
  }
}

export default IconWithText;