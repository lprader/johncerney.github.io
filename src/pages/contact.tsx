import * as React from 'react';
import ContactCard from '../components/contactCard';
import Grid from '../components/grid';

class Contact extends React.Component {
  render() {
    return (  
      <div className="page">
        <h1>Contact</h1>
        <Grid colSize='xs'>
          <ContactCard email="jmcerney@sbcglobal.net" />
          <ContactCard phone="(831) 758-8403" />
          <ContactCard address={["John Cerney Murals", "543-C Brunken Ave.", "Salinas, CA 93901"]} />
        </Grid>
      </div>
    );
  }
}

export default Contact;
