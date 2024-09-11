import { useState } from 'react'
import Card from './assets/Components/Card'
import './App.css'

function App() {
  const curTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(curTime);
  const update = () => {
    const curTime = new Date().toLocaleTimeString();
    setTime(curTime)
  }  
  setInterval(() => {
    update()
  })
  
  return (
    <>
      <h1>ishaque Digital Clock</h1>
      <h1>{time}</h1>
    </>

  )
}

export default App
