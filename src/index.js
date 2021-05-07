import React from 'react';
import ReactDOM from 'react-dom';




class App extends React.Component {
    //When a new instance of this component is created this the constructor method is called before anything else
    constructor(props){
        super(props); 
        //state is a JS object that contains data relevant to a component
        //when we initalize a property inside the state object the default value is usually set to null because we aren't given a value yet
    //1
    //  THIS IS THE ONLY TIME WE DO A DIRECT ASSIGNMENT TO this.state
        this.state ={latitude: null}
        
        window.navigator.geolocation.getCurrentPosition(
			(position) => {
                this.setState({latitude: position.coords.latitude}) //we are using this line to update the state on line 14
            }, //sucess callback
			(err) => console.log(err) //fail back
		);
    }
    //render method is required
	render() {
		
	//2
    	return <div>Latitude: {this.state.latitude} </div>;
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
