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
      console.log('все поля должны быть корректно заполнены')
      this.showModal('все поля должны быть корректно заполнены')
    }
  }

  handleCancel() {
    this.setState(initialState)
    this.showModal('форма очищена')
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

        <div className={styles.cta}>
          <Button type="submit">Сохранить</Button>
          <Button type="button" onClick={this.handleCancel}>
            Отмена
          </Button>
        </div>

        <Modal show={this.state.showModal} />

        <div
          ref={(el) => {
            this.el = el
          }}
        />
      </form>
    )
  }
}

// Необходимо  создать верстку для формы-анкеты используя переиспользуемые stateless комопненты React. Пишем только на классовых компонентах.
// 	На странице должен быть заголовок «Создание анкеты». А ниже такие поля как «Имя», «Фамилия»,  «Дата рождения»,  «Телефон», «Сайт»,  «О себе», «Стек технологий», «Описание последнего проекта».  В конце должен быть блок с кнопками «Отмена» и «Сохранить».
// 	Над каждым полем должна быть подпись (label). Помимо подписи должен быть еще соответствующий placeholder.
// 	Поля «О себе», «Стек технологий» и «Описание последнего проекта» должны быть сделаны как многострочные поля ввода с фиксированным количеством строк для ввода (7 строк).
// 	Страничка должна быть презентабельной – дизайн на ваш вкус. Используем только React и CSS модули.  Другие вспомогательные библиотеки использовать нельзя.

// return (
//   <form onSubmit={this.handleSubmit}>
//     {data.map((item) =>
//       item.type === 'text' ? (
//         <div key={item.label}>
//           <WithBadgeInput
//             label={item.label}
//             value={this.state[item.stateName]}
//             onChange={(e) =>
//               this.setState({ [item.stateName]: e.target.value })
//             }
//           />
//         </div>
//       ) : item.type === 'date' ? (
//         <div key={item.label}>
//           <WithBadgeDate
//             label={item.label}
//             value={this.state[item.stateName]}
//             onChange={(e) =>
//               this.setState({ [item.stateName]: e.target.value })
//             }
//           />
//         </div>
//       ) : item.type === 'tel' ? (
//         <div key={item.label}>
//           <WithBadgeTel
//             label={item.label}
//             value={this.state[item.stateName]}
//             onChange={(e) =>
//               this.setState({ [item.stateName]: e.target.value })
//             }
//           />
//         </div>
//       ) : (
//         <div key={item.label}>
//           <WithBadgeTextArea
//             label={item.label}
//             value={this.state[item.stateName]}
//             onChange={(e) =>
//               this.setState({ [item.stateName]: e.target.value })
//             }
//           />
//         </div>
//       )
//     )}
//   </form>
// )
