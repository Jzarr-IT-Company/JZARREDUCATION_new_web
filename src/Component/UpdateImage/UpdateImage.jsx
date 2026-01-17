import { Spin } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';  
import { useGlobalState } from '../../Context/Context';

function UpdateImage() {
    const {userId,setUpdateState}=useGlobalState();
    const [file, setFile] = useState(null);  
    const [loader, setLoader] = useState(false)
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);  
    };

    const handleUploadClick = async () => {
        setLoader(true)
        if (!file) {
            setLoader(false)
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Please select a file to upload!',
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }
        const formData = new FormData();
        formData.append('file', file);
        try {
            const uploadResponse = await axios.post('https://images-apis-cklz.vercel.app/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const imageUrl = uploadResponse.data.url;
            const updateResponse = await axios.post('https://main-server-zeta.vercel.app/updateImage', { id: userId, image: imageUrl });
            if (updateResponse.status === 200) {
                setLoader(false)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Image Updated successfully!',
                    showConfirmButton: false,
                    timer: 1500,
                }).then((result) => {
                    if (result) {
                        setUpdateState(true)
                    }
                });
            }
        } catch (error) {
            setLoader(false)
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Something went wrong!',
                showConfirmButton: false,
                timer: 1500,
            });
            console.error('Error uploading image:', error.message, error.code);
        }
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <p className='mb-3 fw-semibold'>Profile Image Update</p>
                        <div className=" d-flex justify-content-between">
                        <input type="file" className='w-25' onChange={handleFileChange} />
                        <button className="btn btn-success w-25" onClick={handleUploadClick}>
                            {loader ? <Spin /> : "Upload"}
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdateImage;
