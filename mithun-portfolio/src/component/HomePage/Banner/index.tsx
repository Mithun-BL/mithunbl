import React from 'react';
import {Container} from 'react-bootstrap';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Banner/HomeBanner.module.scss';

const BannerData = 
  {
    Greetings:"Hi I'm MithunBL 👋",
    Title:'A passionate web developer who loves to build Creative as well as Interactive websites',  
    Links : [
      {Text:'My Work', TextUrl:'https://paicon.com/'},
      {Text:'About Me', TextUrl:'https://terra-cms.irepo.in/myntra_life/'}
    ]
  }


const HomeBanner = () => {

  return (
      <section className={classNames(styles.banner, 'my-5')}>
        <Container>
          <div className={styles.bannerContent}>
            <span>{BannerData.Greetings}</span>
            <h2>{BannerData.Title}</h2>
            <div>
              {BannerData.Links.map((Link, index) => (
                <a key={index} href={Link.TextUrl} className={classNames('text-decoration-none', index === 0 ? 'btn_black me-3' : 'btn_bdr')}>
                  {Link.Text}
                </a>
               ))}
              {/* <a href="#" className='text-decoration-none btn_bdr'>{BannerData.AboutLinkText}</a> */}
            </div>    
          </div>    
        </Container>
      </section>
  )
}

export default HomeBanner