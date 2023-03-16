import React, { Component } from 'react'
import Button from '../Button/Button'
import Result from './Result/Result'

export default class Results extends Component {
  render() {
    const data = this.props.data
    return (
      <>
        <h1>{`${data[0][1]} ${data[1][1]}`}</h1>
        {data.map((item) => (
          <Result title={item[0].trim()} text={item[1].trim()} />
        ))}
        <Button type="button" onClick={this.props.onBack}>
          Назад
        </Button>
      </>
    )
  }
}
