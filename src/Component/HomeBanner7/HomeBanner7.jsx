import { Image } from 'antd'
import React from 'react'
import SuccessfullStoryBanner1 from '../SuccessfullStoryBanner1/SuccessfullStoryBanner1'

function HomeBanner7() {
    return (
        <>
            <div className="container">
                <h3 className='fw-bold text-capitalize fs-1'>Our Successfull Students</h3>
                <SuccessfullStoryBanner1/>
                <div className="row mt-5" style={{gap:"0px 0px"}}>
                    <div className="col-md-4">
                        <div className="w-100">
                            <Image
                                className='img-fluid w-100'
                                style={{height:"200px" , width:"100%"}}
                                 rel="preload"
                                src={'https://res.cloudinary.com/dudbfsq49/image/upload/v1738854868/WhatsApp_Image_2025-02-06_at_5.24.42_PM_2_dedb32.jpg'}
                            />
                            <p className='mb-5 mt-3 fw-semibold'>I’m Sana, from Karachi. Through the Shopify course, I launched my own online store on Shopify, and my monthly revenue has been growing steadily!</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="w-100">
                            <Image
                                className='img-fluid w-100'
                                style={{height:"200px" , width:"100%"}}
                                 rel="preload"
                                src={"https://res.cloudinary.com/dudbfsq49/image/upload/v1738854865/WhatsApp_Image_2025-02-06_at_5.24.42_PM_1_rn15pp.jpg"}
                            />
                            <p className='mb-5 mt-3 fw-semibold'>Hello, I’m Bilal from Islamabad. The Amazon Seller course helped me learn how to launch and grow my own business on Amazon, and now I run a successful Amazon store with increasing daily sales!</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="w-100">
                            <Image
                                className='img-fluid w-100'
                                style={{height:"200px" , width:"100%"}}
                                 rel="preload"
                                src={'https://res.cloudinary.com/dudbfsq49/image/upload/v1738855394/WhatsApp_Image_2025-02-06_at_5.24.40_PM_mj76ze.jpg'}
                            />
                            <p className='mb-5 mt-3 fw-semibold'>I’m Muzammil from Mirpur. Thanks to the Amazon Seller course, I launched my own store on Amazon and am now building a loyal customer base with regular sales.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="w-100">
                            <Image
                                className='img-fluid w-100'
                                style={{height:"200px" , width:"100%"}}
                                 rel="preload"
                                src={'https://res.cloudinary.com/dudbfsq49/image/upload/v1738855902/WhatsApp_Image_2025-02-06_at_5.24.40_PM_d9brkn.jpg'}
                            />
                            <p className='mb-5 mt-3 fw-semibold'>Hi, I’m Nida from Faisalabad. After taking the Amazon Seller course, I launched my own store on Amazon, and I’m thrilled to see my business grow with steady orders!</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="w-100">
                            <Image
                                className='img-fluid w-100'
                                style={{height:"200px" , width:"100%"}}
                                 rel="preload"
                                src={'https://res.cloudinary.com/dudbfsq49/image/upload/v1738855902/WhatsApp_Image_2025-02-06_at_5.24.38_PM_2_b4jela.jpg'}
                            />
                            <p className='mb-5 mt-3 fw-semibold'>Hello, I’m Raza from Larkana. The Amazon FBA training helped me sell internationally, and my products are now performing well on Amazon.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="w-100">
                            <Image
                                className='img-fluid w-100'
                                style={{height:"200px" , width:"100%"}}
                                 rel="preload"
                                src={'https://res.cloudinary.com/dudbfsq49/image/upload/v1738856501/WhatsApp_Image_2025-02-06_at_5.24.38_PM_oelfpd.jpg'}
                            />
                            <p className='mb-5 mt-3 fw-semibold'>My name is Ali, and I’m from Gujranwala. The Amazon FBA training helped me launch my first product, and now I’m a verified seller with increasing product visibility.</p>
                        </div>
                    </div>
                    {/* <div className="col-md-4">
                        <div className="w-100">
                            <Image
                                className='img-fluid w-100'
                                style={{height:"200px" , width:"100%"}}
                                 rel="preload"
                                src={'https://res.cloudinary.com/ds819uy6o/image/upload/v1730562554/1730562552789-698649185_cinpji.jpg'}
                            />
                            <p className='mb-5 mt-3 fw-semibold'>My name is Ali, and I’m from Gujranwala. The Amazon FBA training helped me launch my first product, and now I’m a verified seller with increasing product visibility.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="w-100">
                            <Image
                                className='img-fluid w-100'
                                style={{height:"200px" , width:"100%"}}
                                 rel="preload"
                                src={'https://res.cloudinary.com/ds819uy6o/image/upload/v1730562554/1730562552794-166337269_ja9zyl.jpg'}
                            />
                            <p className='mb-5 mt-3 fw-semibold'>I’m Sana, from Karachi. Through the Amazon FBA course, I launched my own product line on Amazon, and my monthly revenue has been growing steadily!</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="w-100">
                            <Image
                                className='img-fluid w-100'
                                style={{height:"200px" , width:"100%"}}
                                 rel="preload"
                                src={'https://res.cloudinary.com/ds819uy6o/image/upload/v1730562554/1730562552798-101497114_tpxxvj.jpg'}
                            />
                            <p className='mb-5 mt-3 fw-semibold'>I’m Sana, from Karachi. Through the Amazon FBA course, I launched my own product line on Amazon, and my monthly revenue has been growing steadily!</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="w-100">
                            <Image
                                className='img-fluid w-100'
                                style={{height:"200px" , width:"100%"}}
                                 rel="preload"
                                src={'https://res.cloudinary.com/ds819uy6o/image/upload/v1730563261/1730563260159-287706671_okxpja.jpg'}
                            />
                            <p className='mb-5 mt-3 fw-semibold'>My name is Danish, and I’m from Sukkur. The Shopify course taught me how to set up my own T-shirt brand online, and my store is now performing exceptionally well.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="w-100">
                            <Image
                                className='img-fluid w-100'
                                style={{height:"200px" , width:"100%"}}
                                 rel="preload"
                                src={'https://res.cloudinary.com/ds819uy6o/image/upload/v1730563261/1730563260159-199320839_kdkvda.jpg'}
                            />
                            <p className='mb-5 mt-3 fw-semibold'>I’m Hassan, and I’m from Rawalpindi. With the Shopify course, I built my own online store, and it’s now generating consistent sales every month!</p>
                        </div>
                    </div> */}
                </div>
                {/* <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-3 col-sm-12">
                        <button className='btn btn-success w-100 py-3 fw-semibold'>View More</button>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default HomeBanner7