import React, { useState } from 'react'
import { useGlobalState } from '../../Context/Context'
import axios from 'axios'
import { message, Spin } from 'antd'

function CommunityBttn({ refreshData }) {
    const { communityImageFile, setCommunityImageFile, communityCommit, setCommunityCommit, userDat, imageData, setimageData } = useGlobalState()
    const [loading, setLoading] = useState(false)
    const handleComment = async () => {
        setLoading(true)
        try {
            const response = await axios.post('https://main-server-zeta.vercel.app/saveCommunityData', {
                name: userDat.name, email: userDat.email, image: userDat.profileImage, commint: communityCommit, commintImage: communityImageFile, imagedata: imageData
            });
            if (response.data.status == 200) {
                setLoading(false)
                message.success("Comment Successfull");
                setCommunityCommit('');
                setCommunityImageFile('');
                refreshData()
                setimageData([])
            }
        } catch (error) {
            setLoading(false)
            console.error("ERROR", error.message)
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            {
                loading ? <Spin /> :
                    <button
                        className='btn btn-success'
                        onClick={handleComment}
                    >
                        <i class="fa fa-paper-plane" aria-hidden="true"></i>
                    </button>
            }
        </>
    )
}

export default CommunityBttn