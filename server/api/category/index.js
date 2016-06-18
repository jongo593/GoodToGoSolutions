'use strict';

var express = require('express');
var controller = require('./category.controller');

var router = express.Router();

router.get('/', controller.index); //List Retrieval
router.get('/:id', controller.show); //Single Retrieval
router.post('/', controller.create); //Creation
router.put('/:id', controller.update); //Update Entire Doc
router.patch('/:id', controller.update); //Partial Update
router.delete('/:id', controller.destroy); //Destruction

module.exports = router;
