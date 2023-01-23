import React, {Component} from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			'hasError': false
		}
	}

	/*React introduced a new life cycle component to catch if eg. hasError changed state. Like try Catch*/
	componentDidCatch(error, info){
		this.setState({hasError:true})
	}

	render() {
		const {hasError} = this.state;
		if (hasError) {
			return <h1> Ooops an Error has occured </h1>
		}
		return this.props.children /*return the intended component this boundary wraps around.*/
	}
}

export default ErrorBoundary;