import React from 'react';
import styles from'../Footer/Footer.module.scss'

const Footer = () => {
  return (
    <>
      <footer className={`${styles["footer"]}`}>
        <div className="container">
          <p>Footer</p>
        </div>
      </footer>
    </>
  )
}

export default Footer