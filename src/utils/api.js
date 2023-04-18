import axios from "axios"


const BASE_URL = 'https://www.googleapis.com/customsearch/v1'

const params = {
    key: 'AIzaSyBt_GzbkDdhpLh4tvjOaA1v-P9YsEQLR34',
    cx: '91e139fe59cc84689'
}

export const fetchDataFromApi = async (payload) => {
    const {data} = await axios.get(BASE_URL, {
        params: {...params, ...payload}
    })
    return data;
}
