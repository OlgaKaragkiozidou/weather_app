import React, {useState} from 'react';
import PropTypes from 'prop-types'; // prop=types prevent that we don't forget to pass any prop to any component

import styles from './Form.module.css';

const Form = ({submitSearch}) => {

    //initialize the location state to useState using the setLocation function | to extract the input field data
    const [location, setLocation] = useState(''); 

    //created a function so that the page is not reloading on submit
    const onSubmit = (e) => {
        e.preventDefault();
        if(!location || location === '') return;

        // the function takes the location value so that it can be exported to the Page file
        submitSearch(location);
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
                // hooking the location to the input field using a value
                value={location}
                // updating the value to const location
                onChange={e => setLocation(e.target.value)}
            />

            <button type="submit" className={styles.button} onClick={onSubmit}>
                SEARCH
            </button>
        </form>
    );
};

Form.propTypes = {
    submitSearch: PropTypes.func.isRequired,
}

export default Form;
