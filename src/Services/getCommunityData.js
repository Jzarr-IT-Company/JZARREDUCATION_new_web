import axios from "axios";

export const getCommunityData = async () => {
    try {
        const response = await axios('http://localhost:8800/getAllDataFromDb');
        console.log(response)
    } catch (error) {
        console.log(error.message);
    }
}