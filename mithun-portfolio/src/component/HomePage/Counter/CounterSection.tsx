
import Counter from './Counter';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useRef, useEffect } from 'react';
import styles from '../../HomePage/Counter/Counter.module.scss';

const CountersSection: React.FC = () => {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      <section ref={sectionRef} className={`${styles.counterSection}`}>
        <Container>
          <Row>
            <Col md={4}>
              <div className={`${styles.counterContent}`}>
                {startCounting && <Counter endValue={4}  />}
                <p>Years of Experience</p>
              </div>
            </Col>
            {/* <Col xs={3}>
              <div className={`${styles.counterContent}`}>
                {startCounting && <Counter endValue={6} suffix=" + " />}
                <p>Technologies</p>
              </div>
            </Col> */}
            <Col md={4}>
              <div className={`${styles.counterContent}`}>
                {startCounting && <Counter endValue={15} suffix=" + " />}
                <p>Projects Completed</p>
              </div>
            </Col>
            <Col md={4}>
              <div className={`${styles.counterContent}`}>
                {startCounting && <Counter endValue={3000} suffix=" + " />}
                <p>Code Commits</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default CountersSection;




// import Counter from './Counter';
// import {Container, Row, Col} from 'react-bootstrap';

// const CountersSection: React.FC = () => {
//   return (
//     <div>
//       <section className='mb-5 pb-5'>
//         <Container>
//           <Row>
//             <Col Xs={4}>
//               <div className='text-center'>
//                 <Counter endValue={3} suffix=" + " />
//                 <p>Years of Experience</p>
//               </div>
//             </Col>
//             <Col Xs={4}>
//               <div className='text-center'>
//                 <Counter endValue={15} suffix=" + " />
//                 <p>Projects Completed</p>
//               </div>
//             </Col>
//             <Col Xs={4}>
//               <div className='text-center'>
//                 <Counter endValue={6} suffix=" + " />
//                 <p>Technologies</p>
//               </div>
//             </Col>
//             <Col Xs={3}>
//               <div className='text-center'>
//                 <Counter endValue={500} suffix=" + " />
//                 <p>Code Commits</p>
//               </div>
//             </Col>
//            </Row>
//         </Container>
//       </section>
//     </div>
//   );
// };

// export default CountersSection;
// // style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}