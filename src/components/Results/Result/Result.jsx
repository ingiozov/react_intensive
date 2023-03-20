import React from 'react'
import styles from './Result.module.css'

function Result({ title, text }) {
  return (
    <div className={styles.result}>
      <h2>{title}</h2>
      <h4>{text}</h4>
    </div>
  )
}

export default Result
