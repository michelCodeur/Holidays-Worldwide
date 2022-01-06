import React from 'react';
import "./Form.module.css";

function Form({handleCountry, handleYear, handleSubmit }) {
    return (
			<form className='main__form'>
				<ul className='form__container'>
					<li className='form__item'>
						<label htmlFor='name'> Country Name : </label>
						<input 
                        placeholder='2 Letters Country Code' type='text'
                        name='searchString'
                        required
                        onChange={handleCountry}
                        
                        />
					</li>
					<li className='form__item'>
						<label htmlFor='year'> Year : </label>
						<input placeholder='4 Digits YEAR' 
                        type='text' 
                        name='searchString'
                        required
                        onChange={handleYear}
                        />
					</li>
				</ul>
				<span>
					<button className='learnmore__button'>
						<h2> Learn More </h2>
					</button>
					<button className='home__button'>Home</button>
					<button className='showresults__button' type='submit'
                    onClick={handleSubmit}>
						<h4>
							SHOW <br /> RESULTS
						</h4>
					</button>
				</span>
			</form>
		);
}

export default Form;