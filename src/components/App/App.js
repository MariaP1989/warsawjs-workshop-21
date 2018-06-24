import React, { Component } from 'react'
import { Provider } from 'react-redux'
import ProjectList  from "../ProjectList/ProjectList";


class App extends Component {
	render() {
		return (
			<Provider {...this.props}>
				<ProjectList />
			</Provider>
		)
	}
}

export default App
