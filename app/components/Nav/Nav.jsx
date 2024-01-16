import React from 'react'
import Image from 'next/image'
import styles from './Nav.module.css'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className={styles.nav}>
        <ul className={styles.list}>
            <li className={styles.item}><Link href="/"><Image src="logo.svg" alt="logo" width={50} height={50} /></Link></li>
            <li className={styles.item}><Link href="#"><Image src="search-icon.svg" alt="logo" width={44} height={44} /></Link></li>
            <li className={styles.item}><Link href="#"><Image src="home-icon.svg" alt="logo" width={44} height={44} /></Link></li>
            <li className={styles.item}><Link href="#"><Image src="play-icon.svg" alt="logo" width={44} height={44} /></Link></li>
            <li className={styles.item}><Link href="#"><Image src="tv-icon.svg" alt="logo" width={44} height={44} /></Link></li>
            <li className={styles.item}><Link href="#"><Image src="like-icon.svg" alt="logo" width={44} height={44} /></Link></li>
            <li className={styles.item}><Link href="#"><Image src="profile-icon.svg" alt="logo" width={44} height={44} /></Link></li>
            <li className={styles.item}><Link href="#"><Image src="top-icon.svg" alt="logo" width={44} height={44} /></Link></li>
        </ul>
    </nav>
  )
}

export default Nav