import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import "semantic-ui-css/semantic.min.css";
import App from './components/App/App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store'
import { CALL_API } from 'redux-api-middleware'

const getProjectsList  = () => ({
  [CALL_API]: {
    endpoint: "/api/projects",
    method: "GET",
    types: [
      "FETCH_PROJECTS_REQUEST",
      "FETCH_PROJECTS_SUCCES",
      "FETCH_PROJECTS_FAILURE"
  ]
  }
})
const initialState = {}

const store = configureStore(initialState)
store.dispatch({ type: "APP_INIT" })
store.dispatch(getProjectsList())

ReactDOM.render(<App store={store} />, document.getElementById('root'))
registerServiceWorker()
