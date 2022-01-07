import React from 'react';
import Header from './Components/Header/Header';
import HolidaysList from './Components/HolidaysList/HolidaysList';
import './index.css'


function App() {
	return (
		<div className='app'>
			<Header />
			<HolidaysList />
		</div>
	);
}
	

export default App;
