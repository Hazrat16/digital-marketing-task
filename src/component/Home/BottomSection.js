import React from 'react';
import bg4 from '../../images/Group 17.png';
import bg5 from '../../images/Group 19.png';
import './BottomSection.css';

const BottomSection = () => {
    return (
        <div className="pb-5 mb-5">
            <div className="sea">
                <img src={bg4} alt="" style={{width:'1349px'}}/>
            </div>
            <div className="people">
            <img src={bg5} alt="" style={{width: '60%'}}/>
            </div>
        </div>
    );
};

export default BottomSection;