import * as React from 'react';
import _pressList from '../press.json';
import IconWithText from '../components/iconWithText';
import Grid from '../components/grid';

interface PressItem {
  icon: string;
  link: string;
  title: string;
  publisher: string;
  date: string;
}

const pressList = _pressList as PressItem[];

class Press extends React.Component {
  render() {
    return (  
      <div className="page">
        <h1>Press</h1>
        <Grid colSize='md'>
          {pressList.map((obj, i) => (
            <IconWithText
              key={i} 
              imgUrl={"press-images/"+obj.icon}
              link={obj.link}
              mainText={obj.title}
              subText={`${obj.publisher}, ${obj.date}`}
            />
          ))}
        </Grid>
      </div>
    );
  }
}

export default Press;
