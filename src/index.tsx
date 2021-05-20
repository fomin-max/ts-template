import * as React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import './styles/index.scss'

import { App } from './App'
import { history } from './store/history'

window.addEventListener('load', () => {
  ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
    document.getElementById('root') || document.querySelectorAll('body')[0],
  )
})
