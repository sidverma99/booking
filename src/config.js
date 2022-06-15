import axios from "axios";

const axiosInstance=axios.create({
    baseURL: "https://hotelsidapi.herokuapp.com/api"
});

export default axiosInstance;