import axios from "axios"


axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL


class TheaterService {


    async addTheater(data) {
        try {
            return await axios.post('/theater/AddTheater', data, {
                withCredentials: true,
            });
        } catch (error) {
            return error
        }
    }

  
}

const theaterService = new TheaterService();

export default theaterService