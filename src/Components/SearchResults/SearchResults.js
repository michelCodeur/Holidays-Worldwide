import React, { useState } from 'react';
import Form from '../Form/Form';
import HolidaysList from '../HolidaysList/HolidaysList';

function SearchResults({
	holidays
	
}) {
	

	

	return (
		<div>
			{holidays.map((holiday, index) => (
				<div key={index}>
					<h4>Country Name: {holiday.country.name}</h4>
					<h4>Date of Celebration: {holiday.date.iso}</h4>
					<h4>Description: {holiday.description}</h4>
					<h4>Holiday Name: {holiday.name}</h4>
					<h4>States: {holiday.states}</h4>
					<h4>Type of Holiday: {holiday.type}</h4>
				</div>
			))}
		</div>
	);
}

export default SearchResults;
