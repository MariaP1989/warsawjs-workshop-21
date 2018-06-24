import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store'

const initialState = {}

const store = configureStore(initialState)
store.dispatch({ type: "APP_INIT" })

ReactDOM.render(<App store={store} />, document.getElementById('root'))
registerServiceWorker()
