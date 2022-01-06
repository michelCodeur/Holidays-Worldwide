import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import Header from './Components/Header';
import SearchResults from './Components/SearchResults';
import './Components/Form.module.css';

function App() {
	const searchOptions = {
		key: process.env.REACT_APP_HOLIDAYS_API_KEY,
		api: 'https://calendarific.com/api/v2',
	};


	const [holidays, setHolidays] = useState([]);
	const [searchcountry, setSearchCountry] = useState('BJ');
  const [searchyear, setSearchYear] = useState('2000');
	const [searchString, setSearchString] = useState('');

	useEffect(() => {
		getResults();
	}, []);

	function getResults(serachString) {
		const url = `${searchOptions.api}/holidays?&api_key=${searchOptions.key}&country=${searchcountry}&year=${searchyear}`;

    console.log(url);
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setHolidays(response.holidays);

				console.log(response.holidays);
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

	return (
		<div>
			<Header />
			<Form holidays={holidays} />
			<SearchResults
				handleCountry={handleCountry}
        handleYear={handleYear}
				handleSubmit={handleSubmit}
				searchString={searchString}
			/>
		</div>
	);
}

export default App;
