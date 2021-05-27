import React from 'react';
import BottomSection from './BottomSection';
import MiddleSection from './MiddleSection';
import TopSection from './TopSection';

const Home = () => {
    return (
        <div className="container">
            <TopSection/>
            <MiddleSection/>
            <BottomSection/>
        </div>
    );
};

export default Home;