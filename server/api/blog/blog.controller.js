/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/blogs              ->  index
 * POST    /api/blogs              ->  create
 * GET     /api/blogs/:id          ->  show
 * PUT     /api/blogs/:id          ->  update
 * DELETE  /api/blogs/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Blog from './blog.model';
import apiUtils from '../apiUtils';

// Gets a list of Blogs
export function index(req, res) {
  return Blog.find().exec()
    .then(apiUtils.respondWithResult(res))
    .catch(apiUtils.handleError(res));
}

// Gets a single Blog from the DB
export function show(req, res) {
  return Blog.findById(req.params.id).exec()
    .then(apiUtils.handleEntityNotFound(res))
    .then(apiUtils.respondWithResult(res))
    .catch(apiUtils.handleError(res));
}

// Creates a new Blog in the DB
export function create(req, res) {
  req.body.created = new Date();
  return Blog.create(req.body)
    .then(apiUtils.respondWithResult(res, 201))
    .catch(apiUtils.handleError(res));
}

// Updates an existing Blog in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Blog.findById(req.params.id).exec()
    .then(apiUtils.handleEntityNotFound(res))
    .then(apiUtils.saveUpdates(req.body))
    .then(apiUtils.respondWithResult(res))
    .catch(apiUtils.handleError(res));
}

// Deletes a Blog from the DB
export function destroy(req, res) {
  return Blog.findById(req.params.id).exec()
    .then(apiUtils.handleEntityNotFound(res))
    .then(apiUtils.removeEntity(res))
    .catch(apiUtils.handleError(res));
}
