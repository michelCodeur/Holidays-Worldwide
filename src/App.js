import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import Header from './Components/Header';
import SearchResults from './Components/SearchResults';
import './Components/Form.module.css';

function App() {
	const searchOptions = {
		key: process.env.REACT_APP_HOLIDAYS_API_KEY,
		api: 'https://calendarific.com/api/v2/holidays?&api_key=',
		country_endpoint: '&country',
		year_endpoint: '&year',
	};
	const [holidays, setHolidays] = useState([]);
	const [lastSearch, setLastSearch] = useState('');
	const [serachString, setSearchString] = useState('');

	useEffect(() => {
		getResults();
	}, []);

	function getResults(serachString) {
		const url = `${searchOptions.api}${searchOptions.key}${searchOptions.country_endpoint}${searchOptions.year_endpoint}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setHolidays(res.data);
				setLastSearch(serachString);
				setSearchString('');
			})
			.catch(console.error);
	}

  function handleChange(event) {
    serachString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getResults();
  }

	return (
		<div className='App'>
			<Header />
			<Form holidays={holidays}/>
			<SearchResults handleChange={handleChange}
                     handleSubmit={handleSubmit}
                     serachString={serachString}/>
		</div>
	);
}

export default App;
