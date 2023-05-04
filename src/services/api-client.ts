import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9a1d7e6aeca747e4b41ca4c03fe88fa2'
    }
})