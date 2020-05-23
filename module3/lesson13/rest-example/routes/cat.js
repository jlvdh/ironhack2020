const mongoose = require('mongoose');
const express = require ('express')
const router = express.Router();

const Cat = require('../models/Cat')
const Food = require('../models/Food.js')

router.get('/', (req, res) => {
Cat.find()
.then(cats => res.status(200).json(cats))
.catch(e => res.status(500).json(e))
})

router.get('/:id', (req, res) => {
Cat.findById(req.params.id)
.then(cat => res.status(200).json(cat))
.catch(e => res.status(500).json(e))
})

router.post('/',(req,res,next)=> {
  const {name,age,about,hungry} = req.body;
  Cat.findOne({name})
  .then(response => {
    if(response) {
        return res.status(400).json({message:'the cat name is already used! '})
    }
    return Cat.create({name,age,about,hungry})
  })
  .then(response => {
    return res.status(201).json(response) 
  })
  .catch(err=> next(err))
})

//api/cats/:id/foods

router.post('/:id/foods', (req, res, next) => {
  
  // create a new food document
  const {brand, calories, dutch} = req.body
  Food.findOne({brand})
  .then(response => {
    if(response) {
        return res.status(400).json({message:'the catfood brand is already used! '})
    }
    return Food.create({brand,calories,dutch})
  })
  .then(response => {
    // relate this food to our cat
    return Cat.updateOne({_id:req.params.id},{$push: {food:response._id}})
  })
  .then(cat => {
    res.status(201).json(cat)
  })
  .catch(err=> next(err))
  
  // Food.create({
  //   brand,
  //   calories,
  //   dutch,
  //   catId: req.params.id
  // })
})

router.get('/:id/foods', (req, res, next) => {
  Cats.findById({
    id: req.params.id
  })
  .populate('Foods')
  .then()

  Foods.find({
    catId: req.params.id
  })
  .then()
})

router.put('/:id', (req,res,next) => {
  const {name,age,about,hungry} = req.body;
  Cat.update({_id: req.params.id}, {name, age, about, hungry})
  .then(cat => res.status(200).json(cat))
  .catch(e => next(e))
})

router.delete('/:id', (req, res, next) => {
  Cat.deleteOne({_id: req.params.id})
  .then(cat => res.status(200).json(cat))
  .catch(e => next(e))
})

module.exports = router;