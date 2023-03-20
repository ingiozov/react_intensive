import React, { Component } from 'react'

export default class TextArea extends Component {
  render() {
    const { type, name, label, value, onChange, charCount, onBlur, error } =
      this.props

    return (
      <label>
        <p>{label}</p>
        <textarea
          type={type}
          name={name}
          placeholder={label}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          rows={7}
          maxLength={'600'}
        />
        <aside>
          {charCount > 599
            ? 'Превышен лимит символов в поле'
            : charCount > 0
            ? `Осталось ${600 - charCount}/600 символов`
            : ''}
        </aside>
        {error && <h6>{error}</h6>}
      </label>
    )
  }
}
