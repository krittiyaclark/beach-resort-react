import React, { Component } from 'react';

import { RoomContext } from '../Context';

import Loading from './Loading';
import Room from './Room';
import Titile from './Titile';

class FeaturedRooms extends Component {
	static contextType = RoomContext;

	render() {
		// Passing the value state from Context.js
		// const { greeting, name } = this.context;
		// console.log(value);
		let { loading, featuredRooms: rooms } = this.context;
		console.log(rooms);
		rooms = rooms.map((room) => {
			return <Room key={room.id} room={room} />;
		});

		return (
			<section className='featured-rooms'>
				<Titile title='Featured Rooms' />
				<div className='featured-rooms-center'>
					{loading ? <Loading /> : rooms}
				</div>
			</section>
		);
	}
}

export default FeaturedRooms;
