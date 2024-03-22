import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../thanks/Thanks.css'

const ThanksPage = () => {
    return (
        <div className="thanks-page">
            <h2>Thanks for Submitting!</h2>
            <p>Your form has been successfully submitted.</p>
            <Link to="/Home" className='submit-button'>Go to Home</Link>
        </div>
    );
};

export default ThanksPage;
