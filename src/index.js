import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import "semantic-ui-css/semantic.min.css";
import App from './components/App/App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store'

const initialState = {
  shops: [
      {
        id: 1,
        name: "App Store"
      },
      {
        id: 2,
        name: "Google Play"
      },
      {
        id: 3,
        name: "Microsoft Store"
      },
      {
        id: 4,
        name: "SymbianOS"
      }
    ]
}

const store = configureStore(initialState)
store.dispatch({ type: "APP_INIT" })

ReactDOM.render(<App store={store} />, document.getElementById('root'))
registerServiceWorker()
