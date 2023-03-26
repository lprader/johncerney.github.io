import * as React from 'react';

interface NavBarProps{
  title: string;
  textLinks: string[];
  iconLinks: { [key: string]: string; };
}

class NavBar extends React.Component<NavBarProps, {}> {
  render() {
    const {title, textLinks, iconLinks} = this.props;
    const iconImgPaths = Object.keys(iconLinks);
    return (  
      <div id="navBar">
        <h1>{title}</h1>
        <div id="navLinks">
          <a href="/">{"home".toUpperCase()}</a>
          {textLinks.map(str => {return (<a key={str} href={str}>{str.toUpperCase()}</a>)})}
          {iconImgPaths.map(imgPath => {return (<a key={imgPath} href={iconLinks[imgPath]}><img src={imgPath + ".png"} /></a>)})}
        </div>
      </div>
    );
  }
}

export default NavBar;
