// Import from react
import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

// Import scss
import styles from './hello-world.scss';

class HelloWorld extends Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<p>Hello World!</p>
			</div>
		)
	}
}

export default HelloWorld;
