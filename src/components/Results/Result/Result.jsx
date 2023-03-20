import React, { Component } from 'react'
import styles from './Result.module.css'

export default class Result extends Component {
  render() {
    return (
      <div className={styles.result}>
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
      </div>
    )
  }
}
