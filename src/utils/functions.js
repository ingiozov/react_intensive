export const normalizeName = (value) => {
  let normalizedName = value.replace(/\d+/g, '')
  return normalizedName
}

export const normalizePhoneNumber = creator()

function creator() {
  let prevValue = ''

  function coreFunc(value) {
    let input = value,
      inputNumberValue = input.replace(/[^\d-]/g, ''),
      formattedValue = ''

    if (!inputNumberValue) return ''

    if (inputNumberValue.length === 1) {
      if (prevValue.length > formattedValue.length) {
        formattedValue = formattedValue.slice(0, -1)
      } else {
        formattedValue = inputNumberValue + '-'
      }
    }
    if (inputNumberValue.length > 2) {
      formattedValue += inputNumberValue
    }
    if (inputNumberValue.length === 6) {
      if (prevValue.length > formattedValue.length) {
        formattedValue = formattedValue.slice(0, -1)
      } else {
        formattedValue += '-'
      }
    }
    if (inputNumberValue.length === 9) {
      if (prevValue.length > formattedValue.length) {
        formattedValue = formattedValue.slice(0, -1)
      } else {
        formattedValue += '-'
      }
    }

    prevValue = formattedValue

    return formattedValue
  }

  return coreFunc
}
