import axios from 'axios';
import React, { useState } from 'react';
import { useGlobalState } from '../../Context/Context';

function FaqsSearchbar({ addNewFaq }) {  // Receive addNewFaq as a prop
    const { faqsSearch, setFaqsSearch } = useGlobalState();
    const [getInput, setGetInput] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://main-server-zeta.vercel.app/FAQS', {
                faqsquestions: getInput
            });

            if (response.data.status === 200) {
                console.log('FAQ added successfully:', response.data);

                // Update the state in the parent component
                addNewFaq({ faqsquestions: getInput, faqsanswer: 'Wait for Answer', description: { subdescription: [] } });

                // Clear the input field
                setGetInput('');
            }
        } catch (error) {
            console.error('Error adding FAQ:', error.message);
        }
    };

    return (
        <>
            <div className='d-flex align-items-center' style={{ gap: '0px 20px' }}>
                <input
                    type="text"
                    className='form-control py-3'
                    placeholder='Search your query or submit your query'
                    value={getInput}
                    onChange={(e) => setGetInput(e.target.value)}
                />
                <button className='btn btn-success w-25' onClick={handleSubmit}>Submit your Query</button>
            </div>
        </>
    );
}

export default FaqsSearchbar;
