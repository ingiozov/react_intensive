import React, { Component } from 'react'
import styles from './Modal.module.css'

export default class Modal extends Component {
  render() {
    const { show } = this.props

    if (!show) {
      return null
    }

    return (
      <div className={styles.modal}>
        <p>{show}</p>
      </div>
    )
  }
}
