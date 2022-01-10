import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LearnMore from './Components/LearnMore/LearnMore';
import Home from './Components/Header/Home';
import Header from './Components/Header/Header';
import HolidaysList from './Components/HolidaysList/HolidaysList';
import './index.css';
import './Components/Header/Header.css';

function App() {
	

	return (
		<div className='app'>
			<header className='header'>
				<h1 className='header__title'>HOLIDAYS WORLDWIDE</h1>
				<h2 className='header__heading'>
					A COLLECTION OF HOLIDAYS OBSERVANCE WORLDWIDE
				</h2>
			</header>
			<Header />
			<HolidaysList />
			

			<main>
				<Routes>
					<Route path='/learn-more' element={<LearnMore />} />
					<Route path='/home' element={<Home />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
