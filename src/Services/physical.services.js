import axios from "axios";

export const physicalForm=async(payload)=>{
    try {
        const response = await axios.post('https://main-server-again.vercel.app/savePhysicalData',{payload});
        return response.data;
    } catch (error) {
        throw error;
    }
}