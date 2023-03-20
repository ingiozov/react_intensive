import React, { Component } from 'react'
import { data as initialData } from '../../utils/data'
import Button from '../Button/Button'
import Result from './Result/Result'

export default class Results extends Component {
  render() {
    const data = this.props.data
    const texts = data.map((item) => item[1].trim())
    console.log(initialData)
    return (
      <>
        <h1>{`${texts[0]} ${texts[1]}`}</h1>
        {data.map((item, i) => (
          <Result key={item[0]} title={initialData[i].label} text={texts[i]} />
        ))}
        <Button type="button" onClick={this.props.onBack}>
          Назад
        </Button>
      </>
    )
  }
}
