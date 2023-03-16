import React, { Component } from 'react'
import { data, initialState } from '../../utils/data'
import Input from './Input/Input'
import TextArea from './TextArea/TextArea'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import {
  withIcon,
  // formValidation,
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
    this.state = initialState
  }

  handleSubmit(e) {
    e.preventDefault()

    const emptyValues = Object.entries(this.state)
      .slice(0, 8)
      .filter((item) => item[1] === '')
    const inputValues = Object.entries(this.state)
      .slice(0, 8)
      .filter((item) => item[1] !== '')

    // handling empty fields
    if (emptyValues.length > 0) {
      const emptyFieldsState = {}
      emptyValues.forEach((item) => {
        emptyFieldsState[item[0]] = true
      })
      this.setState({
        errorState: emptyFieldsState,
      })
      console.log('Все поля должны быть корректно заполнены')
      this.showModal('Все поля должны быть корректно заполнены')
      return
    }

    // submit
    // console.log(
    //   Object.entries(this.state)
    //     .slice(0, 8)
    //     .map((item) => item[1])
    // )
    this.props.onFormSubmit(Object.entries(this.state).slice(0, 8))
  }

  handleCancel() {
    this.setState(initialState)
    this.showModal('Форма очищена')
    console.log('Форма очищена')
  }

  showModal(text) {
    this.setState({
      showModal: text,
    })
  }

  render() {
    // console.log(this.state)
    return (
      <>
        <h1>
          Создание <br /> анкеты
        </h1>
        <form onSubmit={this.handleSubmit} noValidate>
          {data.map((item) => {
            if (item.type === 'textarea') {
              return (
                <WithBadgeTextArea
                  key={item.label}
                  label={item.label}
                  value={this.state[item.stateName]}
                  onChange={(e) => {
                    this.setState({ [item.stateName]: e.target.value })
                    this.setState({
                      charCount: { [item.stateName]: e.target.value.length },
                    })
                    this.setState({
                      errorState: { [item.stateName]: false },
                    })
                  }}
                  charCount={this.state.charCount[item.stateName]}
                  emptyMessage={
                    this.state.errorState[item.stateName]
                      ? 'поле должно быть заполнено'
                      : ''
                  }
                />
              )
            }
            return (
              <WithBadgeInput
                {...item}
                emptyMessage={
                  this.state.errorState[item.stateName]
                    ? 'поле должно быть заполнено'
                    : ''
                }
                key={item.label}
                type={item.type}
                label={item.label}
                value={this.state[item.stateName]}
                onChange={(e) => {
                  this.setState({
                    [item.stateName]:
                      e.target.type === 'tel'
                        ? normalizePhoneNumber(e.target.value, e)
                        : e.target.type === 'text'
                        ? normalizeName(e.target.value)
                        : e.target.value.trim(),
                  })
                  this.setState({
                    errorState: { [item.stateName]: false },
                  })
                }}
                onUnFocused={() => {
                  if (this.state[item.stateName]) {
                    this.setState({ unFocused: { [item.stateName]: true } })
                  }
                }}
                unFocused={
                  this.state.unFocused[item.stateName]
                    ? this.state.unFocused[item.stateName]
                    : false
                }
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
