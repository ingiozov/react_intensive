import Form from './components/Form/Form'
import styles from './App.module.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Results from './components/Results/Results'

function App() {
  const [submitedData, setSubmitedData] = useState([])

  const onFormSubmit = (data) => {
    setSubmitedData(data)
  }

  return (
    <main className={styles.app}>
      <Router>
        <Routes>
          <Route
            path="/result"
            element={<Results submitedData={submitedData} />}
          />
          <Route path="/" element={<Form onFormSubmit={onFormSubmit} />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
