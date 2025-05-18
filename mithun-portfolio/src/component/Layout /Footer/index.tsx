import React from 'react';
import styles from'../Footer/Footer.module.scss'

const Footer = () => {
  return (
    <>
      <footer className={`${styles["footer"]}`}>
        <div className="container">
          <div className={styles.subFooter}>
            <h3>Footer</h3>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer