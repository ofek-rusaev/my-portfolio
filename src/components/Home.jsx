import React from 'react';
import Typical from 'react-typical';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const arrowIcon = <FontAwesomeIcon className="home-arrow" icon={faArrowCircleDown} />
    return (
        <div id="home" className="home">
            <div className="home-inner">
                <h1>I'm {' '}
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'Ofek',
                            1000,
                            'a Full Stack Developer',
                            1000
                        ]}
                    />
                </h1>
                <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>
                    {arrowIcon}
                </Link>
                <div className="wave-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,96L80,90.7C160,85,320,75,480,96C640,117,800,171,960,170.7C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </div>
            </div>

        </div>
    );
}

export default Home;