import React, { Component } from 'react'
import { data, initialState } from '../../utils/data'
import Input from './Input/Input'
import TextArea from './TextArea/TextArea'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import { withIcon, formValidation } from '../../utils/functions'
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
    if (formValidation(this.state)) {
      const data = Array.from(Object.values(this.state)).slice(0, -1).join(`\n`)
      console.log(data)
      this.showModal(data)
    } else {
      console.log('Все поля должны быть корректно заполнены')
      this.showModal('Все поля должны быть корректно заполнены')
    }
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
    return (
      <form onSubmit={this.handleSubmit}>
        {data.map((item) => {
          if (item.type === 'textarea') {
            return (
              <WithBadgeTextArea
                key={item.label}
                label={item.label}
                value={this.state[item.stateName]}
                onChange={(e) =>
                  this.setState({ [item.stateName]: e.target.value })
                }
              />
            )
          }
          return (
            <WithBadgeInput
              key={item.label}
              type={item.type}
              label={item.label}
              value={this.state[item.stateName]}
              onChange={(e) =>
                this.setState({ [item.stateName]: e.target.value })
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
    )
  }
}
