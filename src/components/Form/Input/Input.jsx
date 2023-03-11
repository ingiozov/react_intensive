import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    const { type, label, value, onChange } = this.props

    return (
      <label>
        <p>{label}</p>
        <input
          type={type === 'date' ? 'text' : type}
          value={value}
          onChange={onChange}
          placeholder={label}
          onFocus={type === 'date' ? (e) => (e.target.type = 'date') : () => ''}
        />
      </label>
    )
  }
}
