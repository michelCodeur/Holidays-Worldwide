import React from 'react';
import "./Form.module.css";

function Form({handleCountry, handleYear, handleSubmit, searchcountry, searchyear }) {
    return (
			<form onSubmit={handleSubmit} className='main__form'>
				<ul className='form__container'>
					<li className='form__item'>
						<label htmlFor='country'> Country Name : </label>
						<input 
                        placeholder='2 Letters Country Code' type='text'
                        name='country'
                        required
                        onChange={handleCountry}
                        value={searchcountry}
                        
                        />
					</li>
					<li className='form__item'>
						<label htmlFor='year'> Year : </label>
						<input placeholder='4 Digits YEAR' 
                        type='text' 
                        name='year'
                        required
                        onChange={handleYear}
                        value={searchyear}
                        />
					</li>
				</ul>
				<span>
					<button className='learnmore__button'>
						<h2> Learn More </h2>
					</button>
					<button className='home__button'>Home</button>
					<button className='showresults__button' type='submit'
                    >
						<h4>
							SHOW <br /> RESULTS
						</h4>
					</button>
				</span>
			</form>
		);
}

export default Form;