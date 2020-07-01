import React from 'react';

import { RoomConsumer } from '../Context';

import Loading from './Loading';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';

const RoomContaner = () => {
	return (
		<RoomConsumer>
			{(value) => {
				const { loading, sortedRooms, rooms } = value;

				if (loading) {
					return <Loading />;
				}
				return (
					<>
						<RoomFilter rooms={rooms} />
						<RoomList rooms={sortedRooms} />
					</>
				);
			}}
		</RoomConsumer>
	);
};

export default RoomContaner;
