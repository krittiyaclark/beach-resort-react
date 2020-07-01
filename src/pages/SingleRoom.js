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
		// Output only three images
		const [mainImg, ...defaultImg] = images;
		console.log(defaultImg);
		return (
			// Create Hero images to be dynamically
			// Set an default image
			<>
				<StyledHero img={mainImg || this.state.defaultBcg}>
					<Banner title={`${name} room`}>
						<Link to='/rooms' className='btn-primary'>
							back to rooms
						</Link>
					</Banner>
				</StyledHero>
				<section className='single-room'>
					<div className='single-room-images'>
						{defaultImg.map((item, index) => {
							return <img key={index} src={item} alt={name} />;
						})}
					</div>
					<div className='single-room-info'>
						<article className='desc'>
							<h3>details</h3>
							<p>{description}</p>
						</article>
						<h3>info</h3>
						<h6>price : ${price}</h6>
						<h6>size: ${size} SQFT</h6>
						{/* Conditional check if more than 1 person output 'people' otherwise output 'person' */}
						<h6>
							max capacity :{' '}
							{capacity > 1 ? `${capacity} people` : `${capacity} person`}
						</h6>
						<h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
						<h6>{breakfast && 'free breakfast included'}</h6>
					</div>
				</section>
				<section className='room-extras'>
					<h6>extras</h6>
					<ul className='extras'>
						{extras.map((item, index) => {
							return <li key={index}>- {item}</li>;
						})}
					</ul>
				</section>
			</>
		);
	}
}

export default SingleRoom;
