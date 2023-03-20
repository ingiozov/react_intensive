import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { data, initialFormData, initialFormErrors } from '../../utils/data'
import { normalizePhoneNumber, normalizeName } from '../../utils/functions'
import Input from './Input/Input'
import Textarea from './TextArea/TextArea'
import Button from '../Button/Button'
import styles from './Form.module.css'

function Form({ onFormSubmit }) {
  const [formData, setFormData] = useState(initialFormData)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [charCount, setCharCount] = useState({})
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]:
        name === 'telNumber'
          ? normalizePhoneNumber(value)
          : name === 'name' || name === 'lastName'
          ? normalizeName(value)
          : value,
    })
    setFormErrors({ ...formErrors, [name]: '' })
    setCharCount({ [name]: value.length })
  }

  const handleCancel = (e) => {
    e.preventDefault()
    setFormData(initialFormData)
    setFormErrors(initialFormErrors)
    setCharCount({})
    console.log('форма очищена')
  }

  const onBlur = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
      case 'lastName':
        if (value === '') {
          setFormErrors({ ...formErrors, [name]: 'поле должно быть заполнено' })
        } else if (!/^[A-ZА-ЯЁ][A-Za-zА-ЯЁа-яё'-]*$/.test(value)) {
          setFormErrors({ ...formErrors, [name]: 'с заглавной буквы' })
        }
        break
      case 'birthDate':
        if (value.length <= 1) {
          setFormErrors({ ...formErrors, [name]: 'поле должно быть заполнено' })
        }
        break
      case 'telNumber':
        if (value === '') {
          setFormErrors({ ...formErrors, [name]: 'поле должно быть заполнено' })
        }
        break
      case 'website':
        if (value === '') {
          setFormErrors({ ...formErrors, [name]: 'поле должно быть заполнено' })
        } else if (!/^https?:\/\/.+/.test(value)) {
          setFormErrors({
            ...formErrors,
            [name]: 'сайт должен начинаться с https://',
          })
        }
        break
      case 'about':
      case 'stack':
      case 'lastProject':
        if (value === '') {
          setFormErrors({ ...formErrors, [name]: 'поле должно быть заполнено' })
        }
        break
      default:
        break
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = {}
    if (!formData.name) {
      errors.name = 'Поле Имя должно быть заполнено'
    } else if (!/^[A-ZА-ЯЁ][A-Za-zА-ЯЁа-яё'-]*$/.test(formData.name)) {
      errors.name = 'Имя с заглавной буквы'
    }
    if (!formData.lastName) {
      errors.lastName = 'Поле Фамилия должно быть заполнено'
    } else if (!/^[A-ZА-ЯЁ][A-Za-zА-ЯЁа-яё'-]*$/.test(formData.lastName)) {
      errors.lastName = 'Фамилия с заглавной буквы'
    }
    if (formData.birthDate <= 1) {
      errors.birthDate = 'Поле Дата рождения должно быть заполнено'
    }
    if (!formData.telNumber) {
      errors.telNumber = 'Поле Телефон должно быть заполнено'
    }
    if (!formData.website) {
      errors.website = 'Поле Сайт должно быть заполнено'
    } else if (!/^https?:\/\/.+/.test(formData.website)) {
      errors.website = 'Адрес должен начинаться с https://'
    }
    if (!formData.about) {
      errors.about = 'Поле О себе должно быть заполнено'
    }
    if (!formData.stack) {
      errors.stack = 'Поле Стек должно быть заполнено'
    }
    if (!formData.lastProject) {
      errors.lastProject = 'Поле О проекте должно быть заполнено'
    }

    setFormErrors(errors)

    if (Object.keys(errors).length === 0) {
      // submit
      onFormSubmit(Object.entries(formData))
      navigate('/result')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>
        Создание <br /> анкеты
      </h1>
      {data.map(({ type, name, label }) => {
        if (type !== 'textarea') {
          return (
            <Input
              key={name}
              type={type}
              name={name}
              label={label}
              value={formData[name]}
              onChange={handleChange}
              onBlur={onBlur}
              error={formErrors[name]}
            />
          )
        }
        return (
          <Textarea
            key={name}
            type={type}
            name={name}
            label={label}
            value={formData[name]}
            onChange={handleChange}
            onBlur={onBlur}
            error={formErrors[name]}
            charCount={charCount[name]}
          />
        )
      })}
      <div className={styles.buttons}>
        <Button type="submit">Сохранить</Button>
        <Button type="button" onClick={handleCancel}>
          Отмена
        </Button>
      </div>
    </form>
  )
}

export default Form
