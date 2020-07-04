import React, { useContext } from 'react';

import { RoomContext } from '../Context';
import Title from './Titile';

// get all unique values
const getUnique = (items, value) => {
	return [...new Set(items.map((item) => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
	// react hooks
	const context = useContext(RoomContext);
	const {
		handleChange,
		type,
		capacity,
		price,
		minPrice,
		maxPrice,
		minSize,
		maxSize,
		breakfast,
		pets,
	} = context;

	// get unique types
	let types = getUnique(rooms, 'type');
	// add all
	types = ['all', ...types];
	// map to jsx
	types = types.map((item, index) => (
		<option key={index} value={item}>
			{item}
		</option>
	));
	// get unique capacity
	let guests = getUnique(rooms, 'capacity');
	guests = guests.map((item, index) => (
		<option key={index} value={item}>
			{item}
		</option>
	));
	return (
		<section className='filter-container'>
			<Title title='search rooms' />
			<form className='filter-form'>
				<div className='form-group'>
					<label htmlFor='type'>room type</label>
					<select
						name='type'
						id='type'
						onChange={handleChange}
						className='form-control'
						value={type}>
						{types}
					</select>
				</div>
				<div className='form-group'>
					<label htmlFor='capacity'>Guests</label>
					<select
						name='capacity'
						id='capacity'
						onChange={handleChange}
						className='form-control'
						value={capacity}>
						{guests}
					</select>
				</div>
				<div className='form-group'>
					<label htmlFor='price'>room price ${price}</label>
					<input
						type='range'
						name='price'
						min={minPrice}
						max={maxPrice}
						id='price'
						value={price}
						onChange={handleChange}
						className='form-control'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='price'>room size</label>
					<div className='size-inputs'>
						<input
							type='number'
							name='minSize'
							value={minSize}
							onChange={handleChange}
							className='size-input'
						/>
						<input
							type='number'
							name='maxSize'
							value={maxSize}
							onChange={handleChange}
							className='size-input'
						/>
					</div>
				</div>
				<div className='form-group'>
					<div className='single-extra'>
						<input
							type='checkbox'
							name='breakfast'
							id='breakfast'
							checked={breakfast}
							onChange={handleChange}
						/>
						<label htmlFor='breakfast'>breakfast</label>
					</div>
					<div className='single-extra'>
						<input
							type='checkbox'
							name='pets'
							checked={pets}
							onChange={handleChange}
						/>
						<label htmlFor='breakfast'>pets</label>
					</div>
				</div>
			</form>
		</section>
	);
};

export default RoomsFilter;
