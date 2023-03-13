import React, { Component } from 'react'
import Form from './components/Form/Form'
import styles from './App.module.css'

class App extends Component {
  render() {
    return (
      <main className={styles.App}>
        <h1>
          Создание <br /> анкеты
        </h1>

        <Form />
      </main>
    )
  }
}

export default App
