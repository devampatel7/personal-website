import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import react_img from '../assets/img/react-custom.svg';
import node_img  from '../assets/img/node-js-2.svg';
import docker_img from '../assets/img/docker-custom.svg';
import pandas_img  from '../assets/img/pandas-custom.svg';
import python_img from '../assets/img/Python-logo-notext.svg.png';
import java_img from '../assets/img/java.svg';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Technical Skills</h2>
                        <p>Some of the languages and libraries I have used and learned over time:<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={java_img} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={python_img} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={react_img} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={node_img} alt="Image" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={pandas_img} alt="Image" />
                                <h5>Pandas</h5>
                            </div>
                            <div className="item">
                                <img src={docker_img} alt="Image" />
                                <h5>Docker</h5>
                            </div>
                            
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
