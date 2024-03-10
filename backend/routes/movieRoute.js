const mongoose = require("mongoose");
const Vijay = require("../model/VijayModel");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).send("movie Route is working...");
});

router.post("/", async (req, res) => {
  try {
    const { movie, director, musicDirector, releaseYear } = req.body;
    if (!movie || !director || !releaseYear) {
      throw new Error("fill the required Fields ");
    }

    const movieExist = await Vijay.findOne({ movie: movie });
    if (movieExist) {
      throw new Error("movie is already exists");
    }
    const data = {
      movie: movie,
      director: director,
      musicDirector: musicDirector,
      releaseYear: releaseYear,
    };
    const value = await Vijay.create(data);
    res.status(200).send(value);
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const status = await Vijay.findByIdAndUpdate(id, req.body, { new: true });
    if (!status) {
     return res.status(400).send("movie doesnt Exist");
    }

    res.send(status);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const{id} = req.params;
    const status = await Vijay.findByIdAndDelete(id);
    if(!status){
        throw new Error('Movie Not Found')
    };
    res.status(200).send(`movie Deleted SuccessFully id:${id}`);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
});

router.get('/all',async(req,res)=>{
    try {
        const data = await Vijay.find();
        if(data){
            res.status(200).send(data)
        }
    } catch (error) {
        res.send(error.message)
    }
})
router.get('/:id',async(req,res)=>{
  try {
      const data = await Vijay.findById(req.params.id)
      if(data){
          res.status(200).send(data)
      }
  } catch (error) {
      res.send(error.message)
  }
})
module.exports = router;
