import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import './SeasonDisplay.css';

class App extends React.Component {
	//When a new instance of this component is created this the constructor method is called before anything else
	constructor(props) {
		super(props);
		//state is a JS object that contains data relevant to a component
		//when we initalize a property inside the state object the default value is usually set to null because we aren't given a value yet
		//1
		//  THIS IS THE ONLY TIME WE DO A DIRECT ASSIGNMENT TO this.state
		this.state = { latitude: null, errorMessage: '' };
	}

	//state = {latitude: null, errorMessage:''}; //same as line 12. Line 15 makes it so we don't have to use the constructor method. Bable alrealdy knows what I mean when I just use lne 15
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ latitude: position.coords.latitude }), //we are using this line to update the state on line 14 //sucess callback
			(err) => this.setState({ errorMessage: err.message })
			//fail back
		);
	}

	// componentDidUpdate() {
	// 	console.log('My component was just updated - it rerendered!');
	// }

	//the rendercontent method was created because we should avoid having conditionals in a render method. It is also not good to have multiple return statements in the render methods.

	renderContent() {
		if (this.state.errorMessage && !this.state.latitude) {
			return <div>Error: {this.state.errorMessage}</div>;
		} else if (!this.state.errorMessage && !this.state.latitude) {
			return <Spinner message='Please accept location request' />;
		} else {
			return (
				<div>
					<SeasonDisplay latitude={this.state.latitude} />
				</div>
			);
		}
	}
	//render method is required
	render() {
		return <div>{this.renderContent()}</div>;
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
