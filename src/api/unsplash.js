import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a99313ff60fcc74ad227dd8493e7d44c35bb4ab1475f77520493a00305035605'
    }
})

