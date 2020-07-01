import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import RoomContainer from '../components/RoomContainer';
import RoomContaner from '../components/RoomContainer';

const Rooms = () => {
	return (
		<>
			<Hero hero='roomsHero'>
				<Banner title='our rooms'>
					<Link to='/' className='btn-primary'>
						return home
					</Link>
				</Banner>
			</Hero>
			<RoomContaner />
		</>
	);
};

export default Rooms;
