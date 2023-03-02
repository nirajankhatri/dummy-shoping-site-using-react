import axios from "axios";

const NewInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        Accept: 'application/json',
    }
})



export default NewInstance