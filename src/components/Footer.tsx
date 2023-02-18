
import { Inter } from '@next/font/google'
import styles from ' /styles/Home.module.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export function Footer() {
  return (
    <p className={styles.center}>
        presented by オウマガトキ
    </p>
  )
}
