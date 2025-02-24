import { useRef } from 'react';
import Stats from './Stats';
import Cards from './Cards';
import MeetTheTeam from './meetTheTeam';
import IndustryChart from './IndustryChart';
import videoSrc from "../assets/home.mp4";
import '../Styles/Home.css';

const Home = () => {
    const statsRef = useRef(null); // Stats component ke liye reference

    const handleExploreClick = () => {
        if (statsRef.current) {
            statsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="video-container">
                <video autoPlay loop muted className="background-video">
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="contentBtn">
                    <button className="btn btn-outline-primary" onClick={handleExploreClick}>
                        Explore
                    </button>
                </div>
            </div>
            <div ref={statsRef}>
                <Stats />
            </div>
            <Cards />
            <MeetTheTeam />
            <IndustryChart />
        </>
    );
};

export default Home;
