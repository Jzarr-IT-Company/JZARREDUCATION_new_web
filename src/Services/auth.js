import axios from "axios";

export const loginAPI = async (email, pass) => {
    try {
        const response = await axios.post('https://main-server-zeta.vercel.app/login', {
            email: email,
            password: pass
        });
        return response;
    } catch (error) {
        throw error
    }
}
export const signup = async (data) => {
    try {
        let name = data.fname + " " + data.lname;
        const sresponse = await axios.post('https://main-server-zeta.vercel.app/signup', {
            name: name,
            email: data.email,
            password: data.password,
            courses: data.cn,
            phone: data.phoneNo
        });
        return sresponse;
    } catch (error) {
        console.error('Error Response:', error.response, error.message);
        throw error;
    }
}
export const getStudentData = async (id, token) => {
    try {
        const res = await axios.get(`https://main-server-zeta.vercel.app/getStudentData/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res;
    } catch (error) {
        throw error;
    }
}