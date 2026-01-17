import React, { useState } from 'react';
import CommunityBttn from '../CommunityBttn/CommunityBttn';
import CommunityFileUploadCompo from '../CommunityFileUploadCompo/CommunityFileUploadCompo';
import { useGlobalState } from '../../Context/Context';

function CommunityBanner1({refreshData}) {
    const { communityCommit, setCommunityCommit } = useGlobalState()

    const handleInputChange = (e) => {
        setCommunityCommit(e.target.value);
    };

    return (
        <div className="container-fluid px-5 bg-white" style={{position:"sticky",top:"30px"}}>
            <h3 className='fw-bold text-capitalize'>Students Community</h3>
            <div className="row py-4">
                <div className="col-12">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-8 col-sm-12">
                            <div className="d-flex align-items-center" style={{ gap: "0px 12px" }}>
                                <input
                                    type="text"
                                    placeholder='Comment ...'
                                    className='form-control py-3 border-none rounded-5'

                                    value={communityCommit}
                                    onChange={handleInputChange}
                                />
                                <CommunityFileUploadCompo />
                                <CommunityBttn refreshData={refreshData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommunityBanner1;
