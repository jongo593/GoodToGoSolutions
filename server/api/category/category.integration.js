'use strict';

var app = require('../..');
import request from 'supertest';

var newCategory;

describe('Category API:', function() {

  describe('GET /api/categories', function() {
    var categories;

    beforeEach(function(done) {
      request(app)
        .get('/api/categories')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          categories = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      categories.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/categories', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/categories')
        .send({
          name: 'TEST_CATEGORY',
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newCategory = res.body;
          done();
        });
    });

    it('should respond with the newly created blog', function() {
      newCategory.name.should.equal('TEST_CATEGORY');
    });

  });

  describe('GET /api/categories/:id', function() {
    var category;

    beforeEach(function(done) {
      request(app)
        .get('/api/categories/' + newCategory._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          category = res.body;
          done();
        });
    });

    afterEach(function() {
      category = {};
    });

    it('should respond with the requested blog', function() {
      category.name.should.equal('TEST_CATEGORY');
    });

  });

  describe('PUT /api/categories/:id', function() {
    var updatedCategory;

    beforeEach(function(done) {
      request(app)
        .put('/api/categories/' + newCategory._id)
        .send({
          name: 'TEST_CATEGORY_CHANGE',
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedCategory = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedCategory = {};
    });

    it('should respond with the updated blog', function() {
      updatedCategory.name.should.equal('TEST_CATEGORY_CHANGE');
    });

  });

  describe('DELETE /api/categories/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/categories/' + newCategory._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when blog does not exist', function(done) {
      request(app)
        .delete('/api/categories/' + newCategory._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
