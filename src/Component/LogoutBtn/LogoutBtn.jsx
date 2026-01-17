import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

function LogoutBtn() {
    const navigate = useNavigate();
    const handleLogout = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Logout",
            cancelButtonText: "Cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    title: "Logout!",
                    icon: "success"
                }).then((result) => {
                    if (result) {
                        Cookies.remove('authToken');
                        Cookies.remove('userId');
                        Cookies.remove('physicalclass');
                        navigate('/');
                        window.location.reload();
                    }
                })
            }
        });

    };

    return (
        <button
            className='btn btn-light w-100 py-3 text-start'
            onClick={handleLogout}  // Changed the function name for clarity
        >
            Logout
        </button>
    );
}

export default LogoutBtn;
