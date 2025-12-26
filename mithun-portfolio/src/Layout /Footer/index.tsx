import React from 'react';
import Link from 'next/link';
import Img from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="subFooter">
            <Link href="/">
              <Img src="" alt="Logo"/>
            </Link>
            <p>@2025 All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer