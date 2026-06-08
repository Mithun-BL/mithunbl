import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black py-20 px-10 text-white">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="font-bold tracking-wider text-lg">
            MITHUN BL
          </Link>
          <p className="text-sm opacity-60">@2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;