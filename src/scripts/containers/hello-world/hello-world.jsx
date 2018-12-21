// Import from react
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {Provider, connect} from 'react-redux';

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
