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

export default router;