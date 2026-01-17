import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useGlobalState } from '../../Context/Context';

function VerificationAlert() {
    const [isActive, setIsActive] = useState(false);
    const { userId, userToken,setVerified } = useGlobalState();

    useEffect(() => {
        const verification = localStorage.getItem('bankingPayment');
        if (verification) {
            setIsActive(verification === 'true');
        }

        axios.get(`https://main-server-zeta.vercel.app/getStudentData/${userId}`, {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        }).then((response) => {
            response.data.data.forEach((data) => {
                if (data.isActive) {
                    // If isActive is true, remove from localStorage, hide alert, and update server
                    localStorage.removeItem('bankingPayment');
                    setIsActive(false);
                    
                    // Make another API call to set isActive to false on the server
                    axios.post('https://main-server-zeta.vercel.app/updateIsNotActive', {
                        id: userId
                    }, {
                        headers: {
                            'Authorization': `Bearer ${userToken}`
                        }
                    }).then((updateResponse) => {
                        setVerified(true)
                    }).catch((error) => {
                    });
                }
            });
        }).catch((error) => {
            console.error("Error fetching student data:", error);
        });
    }, [userId, userToken]);

    return (
        <div>
            {isActive && (
                <div className="alert alert-primary" role="alert">
                    The course will be available on this dashboard soon after payment verification. Please wait and return to this dashboard!
                </div>
            )}
        </div>
    );
}

export default VerificationAlert;
