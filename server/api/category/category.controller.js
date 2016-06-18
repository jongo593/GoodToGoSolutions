/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/categories              ->  index
 * POST    /api/categories              ->  create
 * GET     /api/categories/:id          ->  show
 * PUT     /api/categories/:id          ->  update
 * DELETE  /api/categories/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Category from './category.model';
import apiUtils from '../apiUtils';

// Gets a list of Blogs
export function index(req, res) {
  return Category.find().exec()
    .then(apiUtils.respondWithResult(res))
    .catch(apiUtils.handleError(res));
}

// Gets a single Blog from the DB
export function show(req, res) {
  return Category.findById(req.params.id).exec()
    .then(apiUtils.handleEntityNotFound(res))
    .then(apiUtils.respondWithResult(res))
    .catch(apiUtils.handleError(res));
}

// Creates a new Blog in the DB
export function create(req, res) {
  return Category.create(req.body)
    .then(apiUtils.respondWithResult(res, 201))
    .catch(apiUtils.handleError(res));
}

// Updates an existing Blog in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Category.findById(req.params.id).exec()
    .then(apiUtils.handleEntityNotFound(res))
    .then(apiUtils.saveUpdates(req.body))
    .then(apiUtils.respondWithResult(res))
    .catch(apiUtils.handleError(res));
}

// Deletes a Blog from the DB
export function destroy(req, res) {
  return Category.findById(req.params.id).exec()
    .then(apiUtils.handleEntityNotFound(res))
    .then(apiUtils.removeEntity(res))
    .catch(apiUtils.handleError(res));
}
