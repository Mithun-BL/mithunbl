import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../WorkExperience/Work.module.scss';

const Work = () => {
  return (
    <section className={`${styles.portfolioExperience} secPad`}>
      <Container>
        <h2 className='fw-bold text-center mb-5 pb-md-4'>Education & Hands-On Experience in IT Industry</h2>
        <Row>
          {/* Education Column */}
          <Col xs={12} md={6} className="pe-md-3">
              <div className={styles.experienceCards}>
                <label>Sep 2016 - Oct 2020</label>
                <h5>Education - BE</h5>
                <h4>Proudhadevaraya Institute of Technology <span>Hosapete, Karnataka</span></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className={styles.experienceCards}>
                <label>June 2014 - April 2016</label>
                <h5>Education - PUC</h5>
                <h4>Ballari independent PU College [Best College], <span>Ballari, Karnataka</span></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className={styles.experienceCards}>
                <label>June 2013 - April 2014</label>
                <h5>Education - !0th / SSLC</h5>
                <h4>St' Marys High School, <span>HD Kote - Mysore, Karnataka</span></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
          </Col>

          {/* Experience Column */}
          <Col xs={12} md={6} className="ps-md-3">
              <div className={styles.experienceCards}>
                <label>June 2022 - Present</label>
                <h5>Software Engineer - III</h5>
                <h4>Terralogic Software Solutions Pvt Ltd, <span>Bangalore, Karnataka</span></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className={styles.experienceCards}>
                <label>June 2021 - May 2022</label>
                <h5>Junior Software Engineer</h5>
                <h4>Codehive IT Solutions Pvt Ltd, <span>Ballari, Karnataka</span></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Work;
