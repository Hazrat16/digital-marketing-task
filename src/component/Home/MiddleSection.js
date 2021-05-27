import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bg3 from '../../images/Group 1.png'

const MiddleSection = () => {
    return (
        <Container>
            <Row style={{  height: '50vh'}}>
                <Col sm={6}>
                    <img src={bg3} alt="" style={{ width: '520px' }} />
                </Col>
                <Col sm={6}>
                    <div style={{ paddingTop: '10px'}}>
                        <h4 style={{ color: '#4619D9' }}>Design and strategy</h4>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, cumque voluptas magni assumenda inventore odio voluptatum consectetur delectus qui voluptate.</small>
                        <h4 style={{ color: '#4619D9', paddingTop: '70px' }}>Digital Marketing Channels</h4>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, cumque voluptas magni assumenda inventore odio voluptatum consectetur delectus qui voluptate.</small>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default MiddleSection;