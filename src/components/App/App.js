import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'

class App extends Component {
	render() {
		return (
			<Provider {...this.props}>
				<div className="App"> test
				</div>
			</Provider>
		)
	}
}

export default App
