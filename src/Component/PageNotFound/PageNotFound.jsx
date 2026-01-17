import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
const PageNoutFound = () => (
    <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={ <Link className='btn btn-primary' type="success" to={'/'}>Back Home</Link>}
        />
    </div>
);
export default PageNoutFound;