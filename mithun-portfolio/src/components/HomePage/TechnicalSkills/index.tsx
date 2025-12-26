import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../TechnicalSkills/Skills.module.scss';

const Skills = () => {
  const [showMore, setShowMore] = useState(false);

  const skills = [
    { title: 'HTML', description: 'Building the structure of websites' },
    { title: 'CSS', description: 'Creating responsive, visually appealing layouts' },
    { title: 'SCSS', description: 'Writing cleaner and more maintainable CSS' },
    { title: 'Bootstrap', description: 'Building mobile-first, responsive designs' },
    { title: 'Tailwind', description: 'Utility-first CSS framework' },
    { title: 'JavaScript', description: 'Making websites interactive and dynamic' },
    { title: 'ReactJS', description: 'Building fast, reusable UI components' },
    { title: 'NextJS', description: 'Framework for building full-stack web applications' },
    { title: 'TypeScript', description: 'Adding type safety to JavaScript' },
    // { title: 'Redux', description: 'Managing complex state efficiently' },
    // { title: 'Node.js', description: 'Server-side JavaScript environment' },
    // { title: 'MongoDB', description: 'NoSQL database for modern applications' },
  ];

  const visibleSkills = showMore ? skills : skills.slice(0, 6);

  return (
    <section className={styles.TechSkills}>
      <Container>
        <h2 className='fw-bold text-center mb-5 pb-3'>
          Tech Stacks & Skills Behind My Web Creations
        </h2>
        <Row>
          {visibleSkills.map((skill, index) => (
            <Col xs={12} md={4} key={index}>
              <div className={styles.skillContnet}>
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </div>
            </Col>
          ))}
        </Row>
        <div className='text-center mt-4'>
          <button 
            onClick={() => setShowMore(!showMore)} 
            className='btn_bdr text-decoration-none'
          >
            {showMore ? 'View Less' : 'View More'}
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Skills;


// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import styles from '../TechnicalSkills/Skills.module.scss';

// const Skills = () => {
//   return (

//         <section className={styles.TechSkills}>
//             <Container>
//                 <h2 className='fw-bold text-center mb-5 pb-3'>Stacks I use to create world class websites ...</h2>
//                 <Row>
//                     <Col xs={4}>
//                       <div className={styles.skillContnet}>
//                         <h4>HTML</h4>
//                         <p>Building the structure of websites</p>
//                       </div>
//                     </Col>
//                     <Col xs={4}>
//                       <div className={styles.skillContnet}>
//                         <h4>CSS</h4>
//                         <p>Creating responsive, visually appealing layouts</p>
//                       </div>
//                     </Col>
//                     <Col xs={4}>
//                       <div className={styles.skillContnet}>
//                         <h4>Bootstrap</h4>
//                         <p>Building mobile-first, responsive designs</p>
//                       </div>
//                     </Col>
//                     <Col xs={4}>
//                       <div className={styles.skillContnet}>
//                         <h4>JavaScript</h4>
//                         <p>Making websites interactive and dynamic</p>
//                       </div>
//                     </Col>
//                     <Col xs={4}>
//                       <div className={styles.skillContnet}>
//                         <h4>ReactJS</h4>
//                         <p>Building fast, reusable UI components</p>
//                       </div>
//                     </Col>
//                     <Col xs={4}>
//                       <div className={styles.skillContnet}>
//                         <h4>NextJS</h4>
//                         <p>Framework for building full-stack web applications</p>
//                       </div>
//                     </Col>
//                 </Row>
//                 <div className='text-center mt-4'>
//                   <a href={'...'} className='btn_bdr text-decoration-none'>View More</a>               
//                  </div>
//             </Container>
//         </section>
//   )
// }

// export default Skills



{/* <Col xs={4}>
<div className={styles.skillContnet}>
  <h4>Typescript</h4>
  <p>Framework for building full-stack web applications</p>
</div>
</Col>
<Col xs={4}>
<div className={styles.skillContnet}>
  <h4>JQuery</h4>
  <p>Framework for building full-stack web applications</p>
</div>
</Col>
<Col xs={4}>
<div className={styles.skillContnet}>
  <h4>Mango DB</h4>
  <p>Framework for building full-stack web applications</p>
</div>
</Col> */}