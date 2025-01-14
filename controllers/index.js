const router = require('express').Router()
const path = require('path')
const animals = require('../models/animals')

// API Routes
router.get('/api/cats', (req, res) => {
  const cats = animals.filter(animal => animal.type === 'cat')
  res.json(cats)
})

router.get('/api/dogs', (req, res) => {
  const dogs = animals.filter(animal => animal.type === 'dog')
  res.json(dogs)
})

router.get('/api/:animalType/:animalId', (req, res) => {
  const { animalType, animalId } = req.params
  const foundAnimal = animals.find(animal => animal.id == animalId && animal.type === animalType)
  res.json(foundAnimal)
})

// View Routes
router.get('/', (req, res) => {
  res.render('home')
})

router.get('/dogs', (req, res) => {
  res.render('animal-by-type')
})

router.get('/cats', (req, res) => {
  res.render('animal-by-type')
})

router.get('/animal/:animalType/:id', (req, res) => {
  res.render('animal-single')
})

module.exports = router