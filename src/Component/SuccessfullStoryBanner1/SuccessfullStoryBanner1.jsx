import React from 'react'

function SuccessfullStoryBanner1() {
    return (
        <>
            <div className="container py-3">
                <div className="row ">
                    <div className="col-12">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-8 col-sm-12">
                                <div className="d-flex align-items-center" style={{ gap: "0px 12px" }}>
                                    <input
                                        type="text"
                                        placeholder='Comment ...'
                                        className='form-control py-3 border-none rounded-5'
                                    />
                                    <abbr title="Upload Files">
                                        <div>
                                            <input
                                                type="file"
                                                className="d-none"
                                                id="files"
                                            />
                                            <label htmlFor="files" style={{ cursor: "pointer" }}>
                                                <i className="fa-solid fa-upload fs-5"></i>
                                            </label>
                                        </div>
                                    </abbr>
                                    <button
                                        className='btn btn-success'
                                    >
                                        <i class="fa fa-paper-plane" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SuccessfullStoryBanner1