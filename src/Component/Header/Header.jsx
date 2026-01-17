import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.svg"
import OffCanvasBtn from '../OffCanvas/OffCanvas'
function Header() {
    return (
        <>
            <div className="container-fluid px-4 py-2" style={{ backgroundColor: "#f5f5f5" }}>
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <div className='d-lg-none d-xl-none d-xxl-none'>
                                <OffCanvasBtn/>
                                 </div>
                            <Link>
                                <img src={logo} alt="Logo" />
                            </Link>
                        </div>
                        <div className="d-none d-lg-flex d-xl-flex d-xxl-flex d-md-flex" style={{ gap: "0px 20px" }}>
                            <div className="border border-dark d-flex justify-content-center align-items-center" style={{ borderRadius: "50%", width: '40px', height: "40px" }}>
                                <Link target='_blank' to={'https://www.facebook.com/jzarriteducation'}><i className="text-dark fs-6 fa-brands fa-facebook-f"></i></Link>
                            </div>
                            <div className="border border-dark d-flex justify-content-center align-items-center" style={{ borderRadius: "50%", width: '40px', height: "40px" }}>
                                <Link target='_blank' to={'https://www.instagram.com/jzarri.teducation/?fbclid=IwZXh0bgNhZW0CMTEAAR3_OVsGWPIbZR3mcGXx6sIoBfb4hi1cqiq8maK4Cum3svMOkJ-mGaH1c3c_aem_5w6Ru_c-gbpXZ9N_rka6RQ'}><i className="text-dark fs-6 fa-brands fa-instagram"></i></Link>
                            </div>
                            <div className="border border-dark d-flex justify-content-center align-items-center" style={{ borderRadius: "50%", width: '40px', height: "40px" }}>
                                <Link target='_blank' to={'https://youtube.com/@waseemjakhrani1?si=ig6kFjKsu-QVYclq'}><i className="text-dark fs-6 fa-brands fa-youtube"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header