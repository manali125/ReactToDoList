import axios from 'axios';

export const fetchMovie = movieId => {
   return axios.get('/api/movie/${movieId}')
                .then(resp => resp.data);
};