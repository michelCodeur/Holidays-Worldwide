import React from 'react';
import Home from '../Header/Home';
import './SearchResults.css';



function SearchResults({ holidays }) {

	if (!holidays) {
		return <>
		</>;
		
	}

	
	return (
		<section className='results__card'>
			{holidays.map((holiday, index) => (
				<div key={index} id={holiday.country.id}>
					<h4>Country Name: {holiday.country.name}</h4>
					<h4>Date of Celebration: {holiday.date.iso}</h4>
					<h4>Description: {holiday.description}</h4>
					<h4>Holiday Name: {holiday.name}</h4>
					<h4>Location: {holiday.locations}</h4>
					<h4>States: {holiday.states}</h4>
					<h4>Type of Holiday: {holiday.type}</h4>
				</div>
			))}
		</section>
	);
}

export default SearchResults;
