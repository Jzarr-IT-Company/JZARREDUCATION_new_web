import React, { useState } from 'react';
import { useGlobalState } from '../../Context/Context';
import axios from 'axios';
import { message, Spin } from 'antd';

function CommunityFileUploadCompo() {
    const { setCommunityImageFile, setimageData } = useGlobalState();
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            uploadFile(files[0]);
        }
    };

    const uploadFile = async (file) => {
        setLoading(true);
        const formData = new FormData();
        formData.append('images', file);

        try {
            const response = await axios.post('https://education-images-server.vercel.app/uploads', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setLoading(false);
            if (response.status === 200) {
                message.success("Image upload successful");
                response.data.imagesData.map((imgs)=>{
                    setimageData(imgs);
                    setCommunityImageFile(imgs.imageUrl);
                    console.log(imgs)
                })
            }
        } catch (error) {
            setLoading(false);
            message.error("Error uploading image");
            console.error('Error uploading file:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            {loading ? <Spin /> :
                <abbr title="Upload Files">
                    <div>
                        <input
                            type="file"
                            className="d-none"
                            id="files"
                            onChange={handleFileChange}
                        />
                        <label htmlFor="files" style={{ cursor: "pointer" }}>
                            <i className="fa-solid fa-upload fs-5"></i>
                        </label>
                    </div>
                </abbr>
            }
        </div>
    );
}

export default CommunityFileUploadCompo;
