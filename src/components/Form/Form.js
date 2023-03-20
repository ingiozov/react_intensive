import React, { Component } from 'react'
import { data, initialFormData, initialFormErrors } from '../../utils/data'
import Input from './Input/Input'
import TextArea from './TextArea/TextArea'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import {
  withIcon,
  normalizePhoneNumber,
  normalizeName,
} from '../../utils/functions'
import styles from './Form.module.css'

const WithBadgeInput = withIcon(Input)
const WithBadgeTextArea = withIcon(TextArea)

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.state = {
      formData: initialFormData,
      formErrors: initialFormErrors,
      charCount: {},
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const formData = this.state.formData
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

    this.setState({ formErrors: errors })

    if (Object.keys(errors).length === 0) {
      // submit
      this.props.onFormSubmit(Object.entries(formData))
    }
  }

  handleCancel() {
    this.setState({
      formData: initialFormData,
      formErrors: initialFormErrors,
      charCount: {},
    })
    this.showModal('Форма очищена')
    console.log('Форма очищена')
  }

  showModal(text) {
    this.setState({
      showModal: text,
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      formData: {
        ...this.state.formData,
        [name]:
          name === 'telNumber'
            ? normalizePhoneNumber(value)
            : name === 'name' || name === 'lastName'
            ? normalizeName(value)
            : value,
      },
    })
    this.setState({
      formErrors: { ...this.state.formErrors, [name]: '' },
    })
    this.setState({
      charCount: { ...this.state.charCount, [name]: value.length },
    })
  }

  handleBlur(e) {
    const { name, value } = e.target
    const emptyMessage = 'поле должно быть заполнено'

    switch (name) {
      case 'name':
      case 'lastName':
        if (value === '') {
          this.setState({
            formErrors: {
              ...this.state.formErrors,
              [name]: emptyMessage,
            },
          })
        } else if (!/^[A-ZА-ЯЁ][A-Za-zА-ЯЁа-яё'-]*$/.test(value)) {
          this.setState({
            formErrors: {
              ...this.state.formErrors,
              [name]: 'с заглавной буквы',
            },
          })
        }
        break
      case 'birthDate':
        if (value.length <= 1) {
          this.setState({
            formErrors: { ...this.state.formErrors, [name]: emptyMessage },
          })
        }
        break
      case 'telNumber':
        if (value === '') {
          this.setState({
            formErrors: { ...this.state.formErrors, [name]: emptyMessage },
          })
        }
        break
      case 'website':
        if (value === '') {
          this.setState({
            formErrors: { ...this.state.formErrors, [name]: emptyMessage },
          })
        } else if (!/^https?:\/\/.+/.test(value)) {
          this.setState({
            formErrors: {
              ...this.state.formErrors,
              [name]: 'сайт должен начинаться с https://',
            },
          })
        }
        break
      case 'about':
      case 'stack':
      case 'lastProject':
        if (value === '') {
          this.setState({
            formErrors: { ...this.state.formErrors, [name]: emptyMessage },
          })
        }
        break

      default:
        break
    }
  }

  render() {
    return (
      <>
        <h1>Создание анкеты</h1>
        <form onSubmit={this.handleSubmit} noValidate>
          {data.map(({ type, name, label }) => {
            if (type === 'textarea') {
              return (
                <WithBadgeTextArea
                  key={name}
                  name={name}
                  label={label}
                  value={this.state.formData[name]}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  charCount={this.state.charCount[name]}
                  error={this.state.formErrors[name]}
                />
              )
            }
            return (
              <WithBadgeInput
                key={name}
                type={type}
                name={name}
                label={label}
                value={this.state.formData[name]}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                error={this.state.formErrors[name]}
              />
            )
          })}
          <div>
            <Modal show={this.state.showModal} />
          </div>
          <div className={styles.cta}>
            <Button type="submit">Сохранить</Button>
            <Button type="button" onClick={this.handleCancel}>
              Отмена
            </Button>
          </div>
        </form>
      </>
    )
  }
}
