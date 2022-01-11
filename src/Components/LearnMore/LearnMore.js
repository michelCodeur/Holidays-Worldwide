import React from 'react';
import { Link } from 'react-router-dom';
import '../HolidaysList/HolidaysList.css';

function LearnMore(props) {
	return (
		<div>
			<h2>Learn More</h2>
			<strong>
				<h3>
					Holidays Worldwide App gives you access to public, local, and bank
					holidays and observances; and spanning over 230 countries, 3,300+
					states and 100+ languages. <br /> The API's data displayed by this app
					is provided to you by www.calendarific.com, an API developer created
					in 2014, and based on the belief that a demand existed for real-time
					holiday tracking with what appeared to be no solution available.{' '}
					<br /> While we have put a lot of time and effort into ensuring the
					accuracy and efficiency of our data, we are constantly expanding our
					database and adding more countries. If you don't find your
					country/state/region on this page please let us know and we will
					update it.
				</h3>
			</strong>
			<button className='home__button' type='submit'>
				<i class='fa fa-home'></i>
				<Link to='/'>
					<h2>HOME</h2>
				</Link>
			</button>
		</div>
	);
}

export default LearnMore;
