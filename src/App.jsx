
import {putData} from './dynamodbClient'
import * as React from 'react'
import './App.css'

const USER_TASKS_TABLE_NAME = 'team57-user-tasks'

function App() {

  React.useEffect(async() => {
    const userData = {
      username:"Faisal",
      taskId:"170"
    }

    await putData(USER_TASKS_TABLE_NAME , userData)
  }, [])

  return (
    <div className="App">
      <h1>Task Tracker App</h1>
    </div>
  )
}

export default App
