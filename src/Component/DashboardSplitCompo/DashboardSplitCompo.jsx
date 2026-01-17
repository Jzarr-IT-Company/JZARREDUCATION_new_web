import { Card, Skeleton } from 'antd'
import React from 'react'

function DashboardSplitCompo() {
    return (
        <div className="container-fluid">
            <div className="row">
                {[...Array(6)].map((_, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                        <Card>
                            <Skeleton active paragraph={{ rows: 4 }} />
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DashboardSplitCompo