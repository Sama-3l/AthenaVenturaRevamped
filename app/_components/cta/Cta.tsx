import React from 'react'
import styles from './cta.module.css'

export default function Cta() {
  return (
    <div className={styles.cta_bar}>
        <div className={styles.cta_note}>
          <div className={styles.dot}></div>
          <p>2 slots available for Apr'26</p>
        </div>

        <div className={styles.cta_buttons}>
            <button className={styles.btn_outline}>Get a Free Idea Consultancy</button>
            <button className={styles.btn_primary}>Book a call</button>
        </div>
    </div>
  )
}