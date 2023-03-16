import React, { Component } from 'react'
import Form from './components/Form/Form'
import styles from './App.module.css'
import Results from './components/Results/Results'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onFormSubmit: false,
      submitData: [],
    }
  }

  render() {
    return (
      <main className={styles.App}>
        {this.state.onFormSubmit ? (
          <Results
            data={this.state.submitData}
            onBack={() =>
              this.setState({
                onFormSubmit: false,
              })
            }
          />
        ) : (
          <Form
            onFormSubmit={(data) => {
              // console.log(data)
              this.setState({ onFormSubmit: true, submitData: data })
            }}
          />
        )}
      </main>
    )
  }
}

export default App
