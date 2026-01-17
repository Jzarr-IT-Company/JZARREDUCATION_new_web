import axios from "axios";

export const getAllCourse = async () => {
    try {
        const response = await axios('https://main-server-zeta.vercel.app/getAllCOurses');
        const data = response.data.response;
        return data;
    } catch (error) {
        console.error("Error fetching courses:", error);
        throw error;
    }
};

export const getCoursesByCourseName = async (id) => {
    try {
        const response = await axios.post(`https://main-server-zeta.vercel.app/getCourseById`, { id: id });
        return response;
    } catch (error) {
        throw error;
    }
};
export const buyCourseByName = async (name, token) => {
    try {
        const response = await axios.post('https://main-server-zeta.vercel.app/selectedGetCourses', {
            coursename: name
        },
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        return response;
    } catch (error) {
        throw error
    }
}

export const getBuyCoursesById = async (id) => {
    try {
        const response = await axios.post('https://main-server-zeta.vercel.app/getCourseById', { id: id })
        return response
    } catch (error) {
        throw error;
    }
}
