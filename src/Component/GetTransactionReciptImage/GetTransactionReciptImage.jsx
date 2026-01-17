import React, { useState } from 'react';
import { Upload, message, Spin } from 'antd';
import axios from 'axios';
import { useGlobalState } from '../../Context/Context';

const GetTransactionReciptImages = () => {
  const { setTransactionImageURL } = useGlobalState();
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false); 

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (newFileList.length > 0) {
      const file = newFileList[newFileList.length - 1];
      uploadFile(file.originFileObj);
    }
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const uploadFile = async (file) => {
    setUploading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('https://img-server-client3.vercel.app/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      message.success(`${file.name} uploaded successfully!`);
      setTransactionImageURL(response.data.imageUrl);
    } catch (error) {
      message.error(`${file.name} upload failed.`);
      console.error('Error uploading file:', error);
    } finally {
      setUploading(false); 
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        beforeUpload={() => false} 
      >
        {fileList.length < 1 && '+ Upload'}
      </Upload>
      {uploading && (
        <div style={{ marginLeft: 20 }}>
          <Spin /> <p>Image Upload</p>
        </div>
      )}
    </div>
  );
};

export default GetTransactionReciptImages;
