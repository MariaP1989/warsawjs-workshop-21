import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom"
import ProjectList  from "../ProjectList/ProjectList"
import ProjectView from "../../views/ProjectView";

class App extends Component {
	render() {
		return (
			<Provider {...this.props}>
			<Router>
				<div>
					<Route exact path="/" component={ProjectList} />
					<Route  path="/project/:projectId" component={ProjectView} />
				</div>
			</Router>
			</Provider>
		)
	}
}

export default App
