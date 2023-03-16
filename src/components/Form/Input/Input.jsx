import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    const {
      type,
      label,
      value,
      onChange,
      errorMessage,
      emptyMessage,
      required,
      onUnFocused,
      unFocused,
      pattern,
    } = this.props

    return (
      <label>
        <p>{label}</p>
        <input
          pattern={pattern}
          required={required}
          onBlur={onUnFocused}
          focused={unFocused.toString()}
          type={type === 'date' ? 'text' : type}
          value={value}
          onChange={onChange}
          placeholder={label}
          onFocus={type === 'date' ? (e) => (e.target.type = 'date') : () => ''}
          maxLength={type === 'tel' ? 12 : null}
        />
        <span>{errorMessage}</span>
        <h6>{emptyMessage}</h6>
      </label>
    )
  }
}
