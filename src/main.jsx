import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// STARTS HERE
import * as AWS from 'aws-sdk'
import { ConfigurationOptions } from 'aws-sdk'

const configuration = {
    region: 'us-west-2',
    secretAccessKey: 'AKIAZKQXVVVAWTPGXGHR',
    accessKeyId: 'bBxBAxhg/28vKc0t5o2jZBhfVxEBmK3LxnnTv6EF'
}

AWS.config.update(configuration)
// ENDS HERE

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
