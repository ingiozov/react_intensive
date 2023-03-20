import React from 'react'

function Input({ type, name, label, value, onChange, onBlur, error }) {
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
      />
      {error && <span>{error}</span>}
    </label>
  )
}

export default Input
