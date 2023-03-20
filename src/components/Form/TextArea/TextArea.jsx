import React from 'react'

function Textarea({
  type,
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  charCount,
}) {
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
        maxLength={600}
        rows={7}
      />
      {error && <span>{error}</span>}
      {charCount > 599
        ? 'Превышен лимит символов в поле'
        : charCount > 0
        ? `Осталось ${600 - charCount}/600 символов`
        : ''}
    </label>
  )
}

export default Textarea
