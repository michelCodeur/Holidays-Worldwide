import React from 'react';
import "./Form.module.css";

function Form(props) {
    return (
        <form>
            <input className='form__country' placeholder='Country Name Is Required' type="text" />
            <input className='form__year' placeholder='Year Is Required' type="text" />
            <input className='form__holiday__name' placeholder='Holiday Name Goes Here' type="text" />
            <input className='form__holiday__language' placeholder='Desired Language Goes Here' type="text" />
            <p className='learnmore'>Learn More
                <link rel="stylesheet" href="./LearnMore.js" />
            </p>
            <button className='button__showresults' type='submit'> SHOW <br/> RESULTS </button>

            
        </form>
    );
}

export default Form;