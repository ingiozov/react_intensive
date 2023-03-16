import React, { Component } from 'react'
import styles from './Result.module.css'

export default class Result extends Component {
  render() {
    return (
      <div className={styles.result}>
        <h2>
          {this.props.title === 'name'
            ? 'Имя'
            : this.props.title === 'lastName'
            ? 'Фамилия'
            : this.props.title === 'birthDate'
            ? 'Дата рождения'
            : this.props.title === 'telNumber'
            ? 'Телефон'
            : this.props.title === 'website'
            ? 'Сайт'
            : this.props.title === 'about'
            ? 'О Себе'
            : this.props.title === 'stack'
            ? 'Стек технологий'
            : this.props.title === 'lastProject'
            ? 'Описание последнего проекта'
            : ''}
        </h2>
        <p>{this.props.text}</p>
      </div>
    )
  }
}
