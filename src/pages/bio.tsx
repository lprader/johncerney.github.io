import * as React from 'react';
import ImageWithText from '../components/imageWithText';

class Bio extends React.Component {
  render() {
    return (  
      <div className="page">
        <h1>Bio</h1>
        <ImageWithText 
          imgAlign="left"
          imgUrl="bio-images/rice.jpg"
          text={[
            "John Cerney is a Salinas, California native whose artwork can best be described as 'giant cut-out art', ordinarily viewed from the comfort of your automobile. For the sake of a title that people can relate to, he calls himself a muralist, but Cerney found out years ago that painting on a wall was restricting to the effect he was looking for.",
            "After earning an art degree from Cal State Long Beach in 1984, Cerney worked in Southern California as a portrait artist, rendering finely detailed pencil drawings. His patrons were television producers and writers, as well as such clients as the late comedian John Candy and hockey star Wayne Gretzky.",
            "Wanting to reach a larger audience, Cerney would relocate to Central California periodically and convince a farmer to allow him to paint a mural on his barn, just for practice. This ultimately led to commissions from local business owners to paint their walls. Finally realizing that he could earn a living painting murals and gain a wider audience, he moved back to Salinas in 1991 to concentrate on his wall paintings."
          ]}
        />
        <ImageWithText 
          imgAlign="right"
          imgUrl="bio-images/farmerandirrigator.jpg"
          text={[
            "The evolution of the cut-out paintings was slow, with a hand sticking out above a fence line as a start, then trying a complete automobile in front of a wall, and finally to the feeling that the wall was unnecessary and that the cut-outs could stand on their own. The landscape behind the figures became the background.",
            "As more of his work was being displayed alongside highways and busy streets, Cerney realized that he had to start painting the figures and scenes larger, so that they could be 'taken in' from a greater distance before coming upon them. In 1995, he created a series of 10 large fieldworkers (18 feet tall) for a local farmer who wanted to pay tribute to the agricultural labor force. Cerney found his 'blueprint' and was soon branching out and putting together group scenes, often telling a story while using a Norman Rockwell-like sense of humor."
         ]}
        />
        <ImageWithText 
          imgAlign="left"
          imgUrl="bio-images/babydresser.jpg"
          imgWidth="300px"
          text={[
            `With all of his work now maintaining a "giant" status, the artist's installations are almost exclusively found alongside the highways of California and the Midwest. Cerney splits his time now working on commissions, either private or with businesses, and his own personal projects. He will conceive the idea first, and then search out a home for it someplace in the U.S. Sometimes it's a perfect match, and sometimes a community has no idea what it's getting into by accepting one of his installations, but they are usually a gift to the city. It is Cerney's way of experimenting with his unusual form of public art.`,
            "Cerney's work has been featured in numerous magazines, books, and newspapers over the years, including National Geographic, Sunset Magazine, Reader's Digest, and the New York Times."         ]}
        />
      </div>
    );
  }
}

export default Bio;
