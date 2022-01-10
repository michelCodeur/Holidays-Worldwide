import React, { useState } from 'react';
import SearchResults from '../SearchResults/SearchResults';
import Form from '../Form/Form';
import './HolidaysList.css';


function HolidaysList() {

	
	const [holidays, setHolidays] = useState(null);
	const [searchcountry, setSearchCountry] = useState();
	const [searchyear, setSearchYear] = useState();
	const [searchString, setSearchString] = useState('');
	const [lastString, setLaststring] = useState('');
	

	const searchOptions = {
		key: process.env.REACT_APP_HOLIDAYS_API_KEY,
		api: 'https://calendarific.com/api/v2/holidays?',
		
	};

	function getResults() {
		const url = `${searchOptions.api}api_key=${searchOptions.key}&country=${searchcountry}&year=${searchyear}`;

		console.log(url);

		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setHolidays(response.response.holidays);

				console.log(response.response.holidays);

				setSearchCountry(searchcountry);
				setSearchYear(searchyear);
				setSearchString('');
				setLaststring(lastString);
			})
			.catch(console.error);
	}

	function handleCountry(event) {
		setSearchCountry(event.target.value);
	}

	function handleYear(event) {
		setSearchYear(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		getResults();
	}

	


	return (
		<div>
			<Form
				holidays={holidays}
				handleCountry={handleCountry}
				handleYear={handleYear}
				handleSubmit={handleSubmit}
				searchcountry={searchcountry}
				searchyear={searchyear}
				searchString={searchString}
				lastString={lastString}
			
			/>
			<SearchResults
				holidays={holidays}
			/>
			
		</div>
	);
}

export default HolidaysList;
