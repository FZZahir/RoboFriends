import React from 'react';

const Scroll = (props) => {
	return(
		/*We can add styling here with JSX rather than make a sep css*/
		<div style = {{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
			{props.children}
		</div>
		);
};

export default Scroll;