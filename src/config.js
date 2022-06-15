import axios from "axios";

export const axiosInstance=axios.create({
    baseURL: "https://hotelsidapi.herokuapp.com/api"
})