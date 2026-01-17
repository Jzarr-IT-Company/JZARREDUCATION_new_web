import React from 'react'
import { Button, Dropdown, Space } from 'antd';
import EditCommunityContent from '../EditCommunityContent/EditCommunityContent';
import DeleteCommunityContent from '../DeleteCommunityContent/DeleteCommunityContent';
const items = [
    {
        key: '1',
        label: (
            <EditCommunityContent />
        ),
    },
    {
        key: '2',
        label: (
            <DeleteCommunityContent />
        ),
    }
];
function CommunityEditBttn({ id }) {
    return (
        <>
            <div className="">
                <Dropdown
                    menu={{
                        items,
                    }}
                    overlayStyle={{ zIndex: 1000 }}

                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            <Button><i className="fa-solid fa-ellipsis-vertical"></i></Button>
                        </Space>
                    </a>
                </Dropdown>
            </div>
        </>
    )
}

export default CommunityEditBttn