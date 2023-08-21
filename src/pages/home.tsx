import * as React from 'react';
import _projectsList from '../projects.json';
import { Project } from "./projects";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Figure from '../components/figure';
import Modal from "../components/modal";
import Popup from "../components/popup";
// @ts-ignore
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

const projectsList = _projectsList as Project[];

interface HomeState {
  showModal: boolean;
}

class Home extends React.Component<{}, HomeState> {
  state = {
    showModal: false
  }
  
  toggleModal = (showModal:boolean) => {
    this.setState({ showModal });
  }

  render() {
    let recentProjects = projectsList.slice(0, 3);
    return (  
      <div id="home" className="homepage">
        <Popup
          header="COMING SOON:"
          subheader="Tall Tales"
          text="View John Cerney's work in person at the Triton Museum of Art in Santa Clara, California"
          buttonText="More Info"
          buttonLink="./tall-tales"
        ></Popup>

        <ParallaxBanner style={{ aspectRatio: '2 / 1', minHeight: "600px" }}>
          <ParallaxBannerLayer image='header.webp' speed={-10} />
          <ParallaxBannerLayer speed={20}><div className="banner"><h1>Giant Highway Art</h1></div></ParallaxBannerLayer>
        </ParallaxBanner>

        <div className="wrapper">
          <div className="left-col">
            <video controls>
              <source src="timelapse.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="right-col">
            <div className="centered">John Cerney is a Monterey County based artist that has been creating larger than life, painted plywood figures since 1995. He has painted hundreds of murals on display all around the country.</div>
          </div>
        </div>

        <div className="centered-content">
          <h1>Recent Work</h1>
          <ResponsiveMasonry className="top-margin" columnsCountBreakPoints={{700: 1, 800: 2, 1000: 3}} >
          <Masonry gutter="2rem">
            {recentProjects.map((obj, i) => (
              <Figure 
                key={i}
                imgUrl={"murals/"+obj.main}
                mainText={obj.title}
                subText={obj.location}
              />)
            )}
          </Masonry>
          </ResponsiveMasonry>
        </div>
        
        <ParallaxBanner style={{ aspectRatio: '2 / 1', minHeight: "300px", maxHeight: "85vh" }}>
          <ParallaxBannerLayer image='video-still.png' speed={-10} />
          <ParallaxBannerLayer speed={20}><div className="secondary-banner"><img src="play.png" alt="play button" onClick={() => {this.toggleModal(true)}}/><p>An interview with Cerney at the Mobile Museum of Art following his installation of SELFIE</p></div></ParallaxBannerLayer>
        </ParallaxBanner>

        {(this.state.showModal)? 
          <Modal 
            videoUrl="https://www.youtube.com/embed/Cxu8upk0VFY?autoplay=1&rel=0&vq=hd720"
            toggleModalFunction={this.toggleModal}
          /> : null}

      </div>
    );
  }
}

export default Home;