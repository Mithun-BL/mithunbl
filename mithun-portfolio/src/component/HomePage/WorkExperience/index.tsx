import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import styles from '../WorkExperience/Work.module.scss';


const Work = () => {
  return (
    <div>
        <section className='mb-5'>
            <Container>
                <h2 className='fw-bold text-center mb-5'>Gained some experience in IT industry</h2>
                <Row>
                    <Col xs={6}>
                       <p>2021</p>
                    </Col>
                    <Col xs={6}>
                       <p>Jr. Software Engineer</p>
                    </Col>
                    <Col xs={6}>
                       <p>2022</p>
                    </Col>
                    <Col xs={6}>
                       <p> Software Engineer I</p>
                    </Col>
                    <Col xs={6}>
                       <p>2023</p>
                    </Col>
                    <Col xs={6}>
                       <p> Software Engineer II</p>
                    </Col>
                    <Col xs={6}>
                       <p>2024</p>
                    </Col>
                    <Col xs={6}>
                       <p>Software Engineer III</p>
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
  )
}

export default Work