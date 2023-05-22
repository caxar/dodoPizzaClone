import axios from 'axios';

const params = {
    headers: {
        Authorization: "Basic " + process.env.REACT_STRAPI_KEY
    }
}

export const fetchDataFromApi = async (url) => {
    try {
        const {data} = await axios.get('http://localhost:1337' + url, params)
        return data;
    } catch (error) {
        console.log(error)
        return error
    }
}