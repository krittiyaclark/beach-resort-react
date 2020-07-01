import React, { Component } from 'react';

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Titile from './Titile';

class Services extends Component {
	state = {
		services: [
			{
				icons: <FaCocktail />,
				title: 'free cocktails',
				info:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			},
			{
				icons: <FaHiking />,
				title: 'Endless Hiking',
				info:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			},
			{
				icons: <FaShuttleVan />,
				title: 'free shuttle',
				info:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			},
			{
				icons: <FaBeer />,
				title: 'strongest beer',
				info:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			},
		],
	};
	render() {
		return (
			<section className='services'>
				<Titile title='services' />
				<div className='services-center'>
					{this.state.services.map((item, index) => {
						return (
							<article key={index} className='service'>
								<span>{item.icons}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
						);
					})}
				</div>
			</section>
		);
	}
}

export default Services;
