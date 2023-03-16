import React, { Component } from 'react'

export default class TextArea extends Component {
  render() {
    const { label, value, onChange, charCount, emptyMessage } = this.props

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
          maxLength={'600'}
        />
        <aside>
          {charCount > 599
            ? 'Превышен лимит символов в поле'
            : charCount > 0
            ? `Осталось ${600 - charCount}/600 символов`
            : ''}
        </aside>
        <h6>{emptyMessage}</h6>
      </label>
    )
  }
}
