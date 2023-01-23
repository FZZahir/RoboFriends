import React, {Component} from 'react';
import CardList from '../components/CardList';
/*import {robots} from './robots';*/ /*replacing with fetch*/
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
	/*We want to keep track of the states and need a constructor*/
	constructor() {
		super()
		this.state = {
			robots: [], /*Used to be robots: robots*/
			searchfield: ''
		}
	}
	/*We dont need to use arrow functions because this is native to React, Only USer dfined functions require arrow functions.*/
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users') /*Takes users from api and fills out robot cards*/
		.then(response => response.json())  /*convert response recieved  to json*/
		.then(users=>{this.setState({robots: users})})
		
	}
	/*Make a function that will be used in SearchBox*/
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value}) /* Modify the value of the serachfield property which is linked to the searchbox..which is linked to robots array.*/
	}
	render() {
		/*Destructuring to remove repetitive this.state throughout code*/
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		/*If it takes long to load then display loading.*/
		if (robots.length === 0) {
			return <h1>Loading</h1>
		}else{
			return (
				<div className = 'tc'>
					<h1 className = 'f1'>RoboFriends</h1>
					<SearchBox searchChange = {this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList  robots = {filteredRobots}  /> {/*Cardlist accepts the robots list properties*/}
						</ErrorBoundary>
					</Scroll>
				</div>
				);
			}
		}
	
	}
export default App;