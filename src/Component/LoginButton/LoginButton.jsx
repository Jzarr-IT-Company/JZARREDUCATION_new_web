import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { useGlobalState } from '../../Context/Context';
import { loginAPI } from '../../Services/auth.js';


function LoginButton() {
    const { loginEmail, setLoginEmail, loginPass, setLoginPass, lloading, setlLoading } = useGlobalState();
    const navigate = useNavigate()
    const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />;
    
    const login = async () => {
        setlLoading(true)
        try {
            const response = await loginAPI(loginEmail, loginPass);
            if (response.data.status === 200) {
                setlLoading(false)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Successfull",
                    showConfirmButton: false,
                    timer: 1500
                  }).then((result)=>{
                    if(result){
                        Cookies.set("authToken", response.data.token,{ expires: 365 });
                        Cookies.set("userId", response.data.id,{ expires: 365 });
                        navigate('/dashboard');
                    }
                })
            }
            setLoginEmail('');
            setLoginPass('');
        } catch (error) {
            setlLoading(false)
            if(error.response.data.status===404){
                Swal.fire({
                    position: "center",
                    icon: "warning",
                    title: error.response.data.message,
                    showConfirmButton: false,
                    timer: 2000
                  })
            }else if(error.response.data.status===401){
                Swal.fire({
                    position: "center",
                    icon: "warning",
                    title: "Invalid Credentials",
                    showConfirmButton: false,
                    timer: 2000
                  })
            }
        } finally {
            setlLoading(false)
        }
    };

    return (
        <>
            <button className="bttn fw-semibold" id="login" onClick={login}>
               {lloading ? <Spin indicator={antIcon} /> : "Login"} 
            </button>
        </>
    );
}

export default LoginButton;
