import React from 'react'
import { useNavigate } from 'react-router-dom'
import { data } from '../../utils/data'
import Button from '../Button/Button'
import Result from './Result/Result'
import styles from './Results.module.css'

function Results({ submitedData }) {
  const navigate = useNavigate()
  const texts = submitedData.map((item) => item[1].trim())

  if (submitedData.length === 0) {
    return <Button onClick={() => navigate('/')}>заполнить форму</Button>
  }
  return (
    <div className={styles.resultsWrapper}>
      <h1>
        {texts[0]} {texts[1]}
      </h1>
      <div className={styles.results}>
        {submitedData.map((item, i) => {
          return <Result key={item[0]} title={data[i].label} text={texts[i]} />
        })}
      </div>
      <Button type={'button'} onClick={() => navigate('/')}>
        Назад
      </Button>
    </div>
  )
}

export default Results
