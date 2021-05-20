import React from 'react'
import ReactDOM from 'react-dom'

import './styles/index.scss'

import { App } from './App'

window.addEventListener('load', () => {
  ReactDOM.render(<App />, document.getElementById('root'))
})
