import React from 'react';
import { Spin } from 'antd';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import { useGlobalState } from '../../Context/Context';
import { signup } from '../../Services/auth';
import { useNavigate } from 'react-router-dom';

function SignupBtn() {
    const { formData, setErrors, setFormData, lloading, setlLoading, buyCourseData, setBuyCourseData, abc } = useGlobalState();
    const navigate = useNavigate();

    const showAlert = (title) => {
        Swal.fire({
            position: "center",
            icon: "warning",
            title: title,
            showConfirmButton: false,
            timer: 1500
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fname) newErrors.fname = 'First Name is required';
        if (!formData.lname) newErrors.lname = 'Last Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.phoneNo) newErrors.phoneNo = 'Phone Number is required';
        else if (formData.phoneNo.length < 10 || formData.phoneNo.length > 15) {
            newErrors.phoneNo = 'Phone Number must be between 10 to 15 digits';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setlLoading(true);
        
        const newErrors = validateForm();
        if (Object.keys(newErrors).length) {
            setErrors(newErrors);
            showAlert(newErrors[Object.keys(newErrors)[0]]);
            setlLoading(false);
            return;
        }

        try {
            const response = await signup(formData);
            if (response.status === 200) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Account Created Successfully",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    const user = response.data.response;
                    const obj = {
                        stuName: user.name,
                        stuEmail: user.email,
                        stuPhone: user.phone,
                        coursename: abc,
                        amount: 2700,
                        id: user._id
                    };
                    setBuyCourseData(obj);
                    Cookies.set("authToken", response.data.token.token, { expires: 365 });
                    Cookies.set("userId", response.data.id, { expires: 365 });

                    if (localStorage.getItem('buyCourse')) {
                        navigate('/payment');
                    } else if (localStorage.getItem('moreCourses')) {
                        navigate('/buymorecourses');
                    } else {
                        navigate('/dashboard');
                    }
                });
                setFormData({ fname: '', lname: '', email: '', password: '', phoneNo: '' });
            }
        } catch (error) {
            if (error.status === 400) {
                showAlert("User Already Exist on This Email!");
            }
        } finally {
            setlLoading(false);
        }
    };

    return (
        <div className="row">
            <button className="bttn fw-semibold" id="createAccount" onClick={handleSubmit}>
                {lloading ? <Spin /> : "Create Account"}
            </button>
        </div>
    );
}

export default SignupBtn;
