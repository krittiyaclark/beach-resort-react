import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { RoomContext } from '../Context';
import defaultBcg from '../images/room-1.jpeg';
import StyledHero from '../components/StyledHero';

class SingleRoom extends Component {
	constructor(props) {
		super(props);
		// this.props passed by react-router -> {history: {}, match: {}, staticContext: undefined}
		// console.log(this.props);
		this.state = {
			slug: this.props.match.params.slug, // Uniq slug
			defaultBcg,
		};
	}

	// Access context from RoomContext
	static contextType = RoomContext;
	// Access parameter :slug
	// componentDidMount() {}
	render() {
		const { getRoom } = this.context;
		const room = getRoom(this.state.slug);
		console.log(room);
		// First loading room.name will be an undefined
		// Check if room is undefined
		if (!room) {
			return (
				<div className='error'>
					<h3>no such room could be found...</h3>
					<Link to='/rooms' className='btn-primary'>
						back to rooms
					</Link>
				</div>
			);
		}
		// Check if room is be found
		// Get from data fields
		const {
			name,
			description,
			capacity,
			size,
			price,
			extras,
			breakfast,
			pets,
			images,
		} = room;
		return (
			// Create Hero images to be dynamically
			// Set an default image
			<StyledHero img={images[0] || this.state.defaultBcg}>
				<Banner title={`${name} room`}>
					<Link to='/rooms' className='btn-primary'>
						back to rooms
					</Link>
				</Banner>
			</StyledHero>
		);
	}
}

export default SingleRoom;
