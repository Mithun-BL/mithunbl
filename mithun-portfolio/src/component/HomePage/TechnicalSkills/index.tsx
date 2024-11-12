import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../TechnicalSkills/Skills.module.scss';

const Skills = () => {
  return (
    <div>

        <section className={styles.TechSkills}>
            <Container>
                <h2 className='fw-bold text-center mb-5 pb-3'>Stacks I use to create world class websites ...</h2>
                <Row>
                    <Col xs={4}>
                      <div className={styles.skillContnet}>
                        <h4>HTML</h4>
                        <p>Building the structure of websites</p>
                      </div>
                    </Col>
                    <Col xs={4}>
                      <div className={styles.skillContnet}>
                        <h4>CSS</h4>
                        <p>Creating responsive, visually appealing layouts</p>
                      </div>
                    </Col>
                    <Col xs={4}>
                      <div className={styles.skillContnet}>
                        <h4>Bootstrap</h4>
                        <p>Building mobile-first, responsive designs</p>
                      </div>
                    </Col>
                    <Col xs={4}>
                      <div className={styles.skillContnet}>
                        <h4>JavaScript</h4>
                        <p>Making websites interactive and dynamic</p>
                      </div>
                    </Col>
                    <Col xs={4}>
                      <div className={styles.skillContnet}>
                        <h4>ReactJS</h4>
                        <p>Building fast, reusable UI components</p>
                      </div>
                    </Col>
                    <Col xs={4}>
                      <div className={styles.skillContnet}>
                        <h4>NextJS</h4>
                        <p>Framework for building full-stack web applications</p>
                      </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
  )
}

export default Skills