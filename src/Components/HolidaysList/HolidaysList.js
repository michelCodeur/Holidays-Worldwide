import React, {useState} from 'react';
import SearchResults from '../SearchResults/SearchResults';
import Form from '../Form/Form';

function HolidaysList() {

    const [holidays, setHolidays] = useState([]);

    const searchOptions = {
			key: process.env.REACT_APP_HOLIDAYS_API_KEY,
			api: 'https://calendarific.com/api/v2',
		};
		const [searchcountry, setSearchCountry] = useState('BJ');
		const [searchyear, setSearchYear] = useState('2005');
		const [searchString, setSearchString] = useState('');

		function getResults(searchString) {
			const url = `${searchOptions.api}/holidays?api_key=${searchOptions.key}&country=${searchcountry}&year=${searchyear}`;

			console.log(url);

			fetch(url)
				.then((response) => response.json())
				.then((response) => {
					setHolidays(response.response.holidays);

					console.log(response.response.holidays);

					setSearchCountry(searchcountry);
					setSearchYear(searchyear);
					setSearchString('');
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
   if (!holidays) {
			return <h3>There are no holidays to display</h3>;
		}

		return (
			<div className='show__page'>
				<Form
					holidays={holidays}
					handleCountry={handleCountry}
					handleYear={handleYear}
					handleSubmit={handleSubmit}
					searchcountry={searchcountry}
					searchyear={searchyear}
				/>
				<SearchResults
					holidays={holidays}
					
				/>
			</div>
		);
			
		
}

export default HolidaysList;