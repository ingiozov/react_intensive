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

export const formValidation = (stateObj) => {
  function hasEmptyFields(obj) {
    for (let key in obj) {
      if (
        obj[key] === null ||
        obj[key] === undefined ||
        obj[key] === '' ||
        (Array.isArray(obj[key]) && obj[key].length === 0)
      ) {
        return true
      }
    }
    return false
  }

  if (hasEmptyFields(stateObj)) {
    return false
  }

  // check phone field
  if (!/^\d+$/.test(stateObj.telNumber)) {
    console.log('номер должен стостоять из цифр')
    return false
  }

  return true
}
