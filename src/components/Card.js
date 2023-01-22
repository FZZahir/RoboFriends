//We need to import the following
import React from 'react';

/*const Card = (props) => {*/ /*Here we just destructred with {} we know it accepts props and the props contain the below id > name > email so we just desturcture the property and make it less ambigous and in the rest of the code we dont need to put props.id props.name*/
const Card = ({id, email, name}) => {
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2'> {/*This className stuff all comes from tachyon. Research it more*/}
			{/*<img alt = 'Robo' src = {`https://robohash.org/${props.id}?200x200`}/>*/}{/*The ? allows you to resize. Also we created a javascript expression that helps randomize the pictures with template srtings*/}
			<img alt = 'Robo' src = {`https://robohash.org/${id}?200x200`}/>
			<div>
{/*				<h2> {props.name} </h2>
				<p> {props.email} </p>*/}
				<h2> {name} </h2>
				<p> {email} </p>
			</div>
		</div>
		);
}
export default Card;