import express from 'express';
import data from '../src/data';

const router = express.Router();

router.get('/movie',(req,res) => {
      res.send({ movie: data.movie });
});

export default router;