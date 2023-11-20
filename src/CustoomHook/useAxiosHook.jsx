import axios from "axios";



const axiosSecure = axios.create({
    baseURL: 'https://hotel-book-server-project.vercel.app',
    withCredentials: true
})

const useAxiosHook = () => {
    return axiosSecure

}

export default useAxiosHook;