import { ReactComponent as UserLogo } from '../icons/user-solid.svg'
import { ReactComponent as DateLogo } from '../icons/calendar-solid.svg'
import { ReactComponent as TelLogo } from '../icons/mobile-solid.svg'
import { ReactComponent as SiteLogo } from '../icons/globe-solid.svg'
import { ReactComponent as AboutLogo } from '../icons/address-card-solid.svg'
import { ReactComponent as StackLogo } from '../icons/stack-overflow.svg'
import { ReactComponent as LastLogo } from '../icons/laptop-file-solid.svg'

export const withIcon = (Element) => (props) => {
  return (
    <div>
      {props.label === 'Имя' || props.label === 'Фамилия' ? (
        <UserLogo />
      ) : props.label === 'Дата рождения' ? (
        <DateLogo />
      ) : props.label === 'Телефон' ? (
        <TelLogo />
      ) : props.label === 'Сайт' ? (
        <SiteLogo />
      ) : props.label === 'О себе' ? (
        <AboutLogo />
      ) : props.label === 'Стек технологий' ? (
        <StackLogo />
      ) : props.label === 'Описание последнего проекта' ? (
        <LastLogo />
      ) : (
        <div></div>
      )}
      <Element {...props} />
    </div>
  )
}

// export const formValidation = (stateObj) => {
//   function hasEmptyFields(obj) {
//     for (let key in obj) {
//       if (
//         obj[key] === null ||
//         obj[key] === undefined ||
//         obj[key] === '' ||
//         (Array.isArray(obj[key]) && obj[key].length === 0)
//       ) {
//         return true
//       }
//     }
//     return false
//   }

//   if (hasEmptyFields(stateObj)) {
//     return false
//   }

//   return true
// }

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
