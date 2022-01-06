import React from 'react';
import "./Form.module.css";

function Form(props) {
    return (
			<form>
				<ul className='form__container'>
					<li className='form__item'>
						<label htmlFor='name'> Country Name : </label>
						<input placeholder='Country Is Required' type='text' />
					</li>
					<li className='form__item'>
						<label htmlFor='year'> Year : </label>
						<input placeholder='Year Is Required' type='text' />
					</li>

					<li className='form__item'>
						<label htmlFor='holiday__name'> Holiday Name : </label>
						<input placeholder='Holiday Goes Here' type='text' />
					</li>
					<li className='form__item'>
						<label htmlFor='holiday__language'> Holiday language : </label>
						<input placeholder='Language Goes Here' type='text' />
					</li>
				</ul>
				<span>
					<button className='learnmore__button'>
						<h2> Learn More </h2>
					</button>
					<button className='home__button'>Home</button>
					<button className='showresults__button' type='submit'>
						<h4>
							SHOW <br /> RESULTS
						</h4>
					</button>
				</span>
			</form>
		);
}

export default Form;