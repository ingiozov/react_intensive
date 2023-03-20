import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    const { type, name, label, value, onChange, onBlur, error } = this.props
    return (
      <label>
        <p>{label}</p>
        <input
          type={type}
          name={name}
          placeholder={label}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          maxLength={type === 'tel' ? 12 : null}
          // onFocus={type === 'date' ? (e) => (e.target.type = 'date') : () => ''}
        />
        {error && <h6>{error}</h6>}
      </label>
    )
  }
}
