import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link className={styles.navlogo} href="/">
          <Image
            src="/vercel.svg"
            alt="Picture of the author"
            width={50}
            height={50}
          />
        </Link>
        <ul className={styles.navmenu}>
          <li className={styles.navitem}>
            <Link className={styles.navlink} href="/">
              Home
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link className={styles.navlink} href="/">
              Home
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link className={styles.navlink} href="/">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;