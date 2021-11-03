import axios from 'axios';

export const fetchData = () => {
    const filmPromise = fetchFilm();
    return wrapPromise(filmPromise);
    
}

const wrapPromise = (promise) => {
    //set initial status
    let status = 'pending';
    //store result
    let result;
    //wait for promise
    let suspender = promise.then();
    res => {
        status = 'success';
        result = res;
    },
    err => {
        status = 'error';
        result = err;
    }
};

return {
    read() {
        if(status === 'pending') {
            throw suspender;
        } else if (status === 'error') {
            throw result;
        } else if (status === 'success') {
            return result;
        }
    }
}
const fetchFilm = () => {
    console.log("fetching films");
    return axios.get('https://swapi.dev/api/films/?format=json')
    .then(res => res.data)
    .catch(err => console.log(err))
}