import React, { Suspense, useEffect, useState } from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Header from '../Component/Header/Header'
import Footer from '../Component/Footer/Footer'
import CommunityBanner1 from '../Component/CommunityBanner1/CommunityBanner1'
const CommunityBanner2 = React.lazy(() => import('../Component/CommunityBanner2/CommunityBanner2'));
import axios from 'axios'
import { Spin } from 'antd'

function Community() {
    const [communityData, setcommunityData] = useState([])
    useEffect(() => {
        (async () => {
            const response = await axios('https://main-server-zeta.vercel.app/getAllDataFromDb');
            setcommunityData(response.data.data)
        })()
    }, [])
    const refreshData = async () => {
        try {
            const response = await axios('https://main-server-zeta.vercel.app/getAllDataFromDb');
            setcommunityData(response.data.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <>
            <Header />
            <Navbar />
            <CommunityBanner1 refreshData={refreshData} />
            <Suspense fallback={<div className='d-flex justify-content-center align-items-center' style={{ height: "60vh" }}><Spin /></div>}>
                <CommunityBanner2 communityData={communityData} />
            </Suspense>
            <Footer />
        </>
    )
}

export default Community