import axios from "axios";

export interface FetchResponse<T> {
    count: number,
    results: T[]
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9a1d7e6aeca747e4b41ca4c03fe88fa2'
    }
})