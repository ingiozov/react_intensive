import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const { type, onClick, children } = this.props

    return (
      <button type={type} onClick={onClick}>
        {children}
      </button>
    )
  }
}
