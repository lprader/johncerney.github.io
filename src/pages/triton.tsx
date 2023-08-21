import * as React from 'react';
import ImageWithText from '../components/imageWithText';

class Triton extends React.Component {
  render() {
    return (  
      <div className="page triton">
        <a href="https://www.tritonmuseum.org/upcoming-exhibition/tall-tales">
          <img width="300px" src="press-images/triton-museum-of-art.webp" />
        </a>
        <h1>Tall Tales</h1>
        <h2>September 9, 2023 - January 14, 2024</h2>
        <h2>Santa Clara, CA</h2>
        <video controls>
        <source src="Triton-Tall-Tales.mp4" />
        Your browser does not support the video tag.
      </video>
        {/* <ImageWithText 
          imgAlign="left"
          imgAltText="Profile picture of John Cerney"
          imgUrl="bio-images/rice.webp"
          text={[
            "John Cerney is a Salinas, California native whose artwork can best be described as 'giant cut-out art', ordinarily viewed from the comfort of your automobile. For the sake of a title that people can relate to, he calls himself a muralist, but Cerney found out years ago that painting on a wall was restricting to the effect he was looking for.",
            "After earning an art degree from Cal State Long Beach in 1984, Cerney worked in Southern California as a portrait artist, rendering finely detailed pencil drawings. His patrons were television producers and writers, as well as such clients as the late comedian John Candy and hockey star Wayne Gretzky.",
            "Wanting to reach a larger audience, Cerney would relocate to Central California periodically and convince a farmer to allow him to paint a mural on his barn, just for practice. This ultimately led to commissions from local business owners to paint their walls. Finally realizing that he could earn a living painting murals and gain a wider audience, he moved back to Salinas in 1991 to concentrate on his wall paintings."
          ]}
        /> */}
      </div>
    );
  }
}

export default Triton;
