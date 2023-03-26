import * as React from 'react';

interface FigureProps{
  imgUrl: string;
  mainText: string;
  subText?: string;
}

class Figure extends React.Component<FigureProps, {}> {
  render() {
    const {imgUrl, mainText, subText} = this.props;
    return (
      <div className="figure">
        <img src={imgUrl} />
        <h3>{mainText}</h3>
        <h4>{subText}</h4>
      </div>
    )
  }
}

export default Figure;