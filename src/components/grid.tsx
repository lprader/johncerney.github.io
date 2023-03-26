import * as React from 'react';

interface GridProps{
  colSize: 'xs' | 'sm' | 'md';
  children?: React.ReactNode | React.ReactNode[];
}

class Grid extends React.Component<GridProps, {}> {
  render() {
    const {children, colSize} = this.props;
    return (  
      <div className={colSize + "-row row"}>
        {children}
      </div>
    )
  }
}

export default Grid;