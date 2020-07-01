import React, { Component } from 'react';

import items from './data';

const RoomContext = React.createContext();
// <RoomContext.Provider  value={'Hello'}
class RoomProvider extends Component {
	state = {
		rooms: [],
		sortedRooms: [],
		featuredRooms: [],
		loading: true,
	};

	// getData

	componentDidMount() {
		let rooms = this.formatData(items);
		console.log(rooms);
		let featuredRooms = rooms.filter((room) => room.featured === true);
		this.setState({
			rooms,
			sortedRooms: rooms,
			featuredRooms,
			loading: false,
		});
	}

	formatData(items) {
		let temItems = items.map((item) => {
			// find id from data
			let id = item.sys.id;
			// find image from data
			let images = item.fields.images.map((image) => image.fields.file.url);
			// copy room fields
			let room = { ...item.fields, images: images, id: id };

			return room;
		});
		return temItems;
	}

	getRoom = (slug) => {
		// Get a specific room that has a slug
		let tempRooms = [...this.state.rooms]; // copy rooms
		const room = tempRooms.find((room) => room.slug === slug);
		return room;
	};

	render() {
		return (
			<RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
				{this.props.children}
			</RoomContext.Provider>
		);
	}
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };