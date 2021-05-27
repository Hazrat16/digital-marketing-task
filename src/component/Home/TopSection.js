import React from 'react';
import './TopSection.css';
import bg1 from '../../images/Group 16.png';
import bg2 from '../../images/Group 18.png';
import signup from '../../images/signup.png'

const TopSection = () => {
    return (
        <div className="wrapper mb-5 pb-5">
            <div className="dashed-box">
                <h1 >Digital <br />marketing</h1>
                <h4 style={{ color: '#4619D9' }} className="pt-4">Targeted and interactive <br />marketing of goods and services </h4>
                <p className="pt-2 pb-4">Sign up and get a discount</p>
                <img src={signup} alt="" style={{width: "20%"}}/>
            </div>
            <div className="people-box">
                <img src={bg2} alt="" style={{width:'104%'}}/>
            </div>
            <div className="blue-box">
            <img src={bg1} alt="" style={{width:'269%'}}/>
            </div>
        </div>
    );
};

export default TopSection;