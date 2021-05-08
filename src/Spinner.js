import React from 'react';
// import './SeasonDisplay.css';

const Spinner = (props) => {
	return (
		<div className='ui active dimmer'>
			<div className='ui big text loader'>{props.message}</div>
		</div>
	);
};
//this object will show the default message of 'Loading..' if I don't pass any props from the parent, index.js

Spinner.defaultProps = {
	message: 'Loading...',
};

export default Spinner;
