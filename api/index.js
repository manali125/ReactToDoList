import express from 'express';
import data from '../src/data';

const router = express.Router();
const movie = data.movie.reduce((obj,movie)=> {
           	  obj[movie.id] = movie;
              return obj;
      	      },{});

router.get('/movie',(req,res) => {
      res.send({ 
      	 movie: movie
   });
});

router.get('/movie/:movieId',(req,res) => {
	let movieObj = movie[req.params.movieId];
      res.send(movieObj);
});

export default router;