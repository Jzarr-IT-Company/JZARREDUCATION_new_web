import React, { useState } from 'react';
import { useGlobalState } from '../../Context/Context';
import { Spin } from 'antd';
import Swal from 'sweetalert2';
import { physicalForm } from '../../Services/physical.services';
import { useNavigate } from 'react-router-dom';

function PhysFormBttn() {
    const { phyFormData, setErrors } = useGlobalState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const validateForm = () => {
        let newErrors = {};

        if (!phyFormData.name) newErrors.name = "Name is required";
        if (!phyFormData.email) newErrors.email = "Email is required";
        if (!phyFormData.phone) newErrors.phone = "Phone number is required";
        if (!phyFormData.address) newErrors.address = "Address is required";
        if (!phyFormData.course) newErrors.course = "Course selection is required";
        if (!phyFormData.dob) newErrors.dob = "Date of Birth is required";
        if (!phyFormData.qualification) newErrors.qualification = "Qualification is required";
        if (!phyFormData.country) newErrors.country = "Country is required";
        if (!phyFormData.city) newErrors.city = "City is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please fill out all required fields",
                showConfirmButton: true,
            });
            return;
        }

        setLoading(true);

        const obj = {
            name: phyFormData.name,
            email: phyFormData.email,
            phone: phyFormData.phone,
            address: phyFormData.address,
            course: phyFormData.course,
            dateofbirth: phyFormData.dob,
            lastqualification: phyFormData.qualification,
            computerProficiency: phyFormData.proficiency || "Not specified",
            doyouhavelaptop: phyFormData.laptop || "No",
            country: phyFormData.country,
            city: phyFormData.city,
        };

        try {
            const response = await physicalForm(obj);
            if (response.status === 200) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Physical Form Submitted",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    navigate("/t");
                });
            }
        } catch (error) {
            console.error("Signup Error: ", error);
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Something went wrong!",
                text: "Please try again later.",
                showConfirmButton: true,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="row mt-4">
            <button
                type="submit"
                className="bttn fw-semibold"
                id="createAccount"
                onClick={handleSubmit}
                disabled={loading}
            >
                {loading ? <Spin /> : "Submit Physical Form"}
            </button>
        </div>
    );
}

export default PhysFormBttn;
