import axios from "axios";

const Api_key = '54665036-94176af4f08ccc0fd35b37209';
const BASE_URL = 'https://pixabay.com/api/';

export default{
    getImagesByQuery(query) {
        const params = {
            key: Api_key,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        };

        return axios.get(BASE_URL, {params})
        .then(response => response.data)
        .catch(error =>{
            console.log('Api error', error);
            throw error;
        })
        

    }
};