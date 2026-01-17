import React, { useEffect, useState } from 'react'
import bydefault from '../../assets/user2.png'
import CommunityEditBttn from '../CommunityEditBttn/CommunityEditBttn'

function CommunityBanner2({ communityData }) {
    const [allCOummunitydata, setallCommunityData] = useState([])
    useEffect(() => {
        setallCommunityData(communityData)
    }, [communityData])
    return (
        <>
            <div className="container pb-5 pt-3">
                <div className="row">
                    <div className="col-12">
                        {
                            allCOummunitydata?.map((data) => {
                                return <div className="border-bottom py-3">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <img src={bydefault} className='img-fluid rounded-circle' width={50} height={50} style={{ borderRadius: "50%" }} alt="" />
                                            <div className="ms-2 mt-2">
                                                <p className='mb-0'>{data.name}</p>
                                                <p className='mt-0'>{data.email}</p>
                                            </div>
                                        </div>
                                        <div className="edit-btn-container" style={{ position: "relative", }}>
                                            <CommunityEditBttn />
                                        </div>
                                    </div>
                                    <div className="">
                                        <img rel="preload" width={200} src={data.commintImage} alt="" />
                                        <p>{data.commint}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default CommunityBanner2