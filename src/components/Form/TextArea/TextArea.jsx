import React, { Component } from 'react'

export default class TextArea extends Component {
  render() {
    const { label, value, onChange } = this.props

    return (
      <label>
        <p>{label}</p>
        <textarea
          className="textarea"
          type="text"
          rows={7}
          value={value}
          onChange={onChange}
          placeholder={label}
        />
      </label>
    )
  }
}
