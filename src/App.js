import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

function App() {
	return (
		<>
			<Route exact path='/' component={Home} />
			<Route exact path='/rooms' component={Rooms} />
			<Route exact path='/rooms/:slug' component={SingleRoom} />
		</>
	);
}

export default App;
