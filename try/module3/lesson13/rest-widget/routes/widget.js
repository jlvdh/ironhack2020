const express = require('express')
const router = express.Router()
const Widget = require('../models/widget')
const Related = require('../models/related')

router.get('/', (req, res, next) => {
  Widget.find()
    .then(widgets => {
      res.status(200).json(widgets)
    })
})

router.get('/:id/related', (req, res, next) => {
  Related.find({widget: req.params.id})
    .populate('widget')
    .then(widget => {
      console.log(widget)
      res.status(200).json(widget)
    })
    .catch(e => console.log(e))
})


router.post('/', (req, res, next) => {
  Widget.create({
    name: req.body.name
  })
  .then(widget => {
    res.status(201).json(widget)
  })
})

router.post('/:id/related', (req, res, next) => {
  Related.create({
    widget: req.params.id,
    name: req.body.name
  })
  .then(related => {
    res.status(200).json(related)
  })
})

router.put('/:id', (req, res, next) => {
  Widget.findByIdAndUpdate(req.params.id, {
    name: req.body.name
  })
  .then(widget => {
    res.status(200).json(widget)
  })
})

router.delete('/:id', (req, res, next) => {
  Widget.findOneAndRemove(req.params.id)
    .then(widget => {
      res.status(200).json(widget)
    })
})


module.exports = router