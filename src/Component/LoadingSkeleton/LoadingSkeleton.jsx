import { Skeleton } from 'antd'
import React from 'react'

function LoadingSkeleton() {
    return (
        <>
            {
                [...Array(12)].map((_, index) => (
                    <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                         <Skeleton.Image className='w-100 h-40' active />
                         <Skeleton active paragraph={{ rows: 2 }} className="mt-2" />
                    </div>
                ))
            }
        </>
    )
}

export default LoadingSkeleton