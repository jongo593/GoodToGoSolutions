'use strict';

var app = require('../..');
import request from 'supertest';
import mongo from 'mongodb'

const ObjectID = mongo.ObjectID;

console.log(new ObjectID());

var newBlog;

describe('Blog API:', function() {

  describe('GET /api/blogs', function() {
    var blogs;

    beforeEach(function(done) {
      request(app)
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          blogs = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      blogs.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/blogs', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/blogs')
        .send({
          name: 'Unit Test Blog Name',
          title: 'Unit Test Title',
          description: 'Unit Test Description',
          long_description: 'Unit Test Long Description',
          author: 'UNIT_TEST_AUTHOR',
          category: new ObjectID(),
          tags: ['unit', 'test'],
          type: 'VIDEO', //VIDEO, ARTICLE, CELL
          assets: [{type: 'thumbnail', data: 'www.testurl.com'}]
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newBlog = res.body;
          done();
        });
    });

    it('should respond with the newly created blog', function() {
      newBlog.name.should.equal('Unit Test Blog Name');
      newBlog.title.should.equal('Unit Test Title');
      newBlog.description.should.equal('Unit Test Description');
      newBlog.long_description.should.equal('Unit Test Long Description');
      newBlog.author.should.equal('UNIT_TEST_AUTHOR');
      //newBlog.category.should.instanceOf(ObjectID);
      newBlog.type.should.equal('VIDEO');
    });

  });

  describe('GET /api/blogs/:id', function() {
    var blog;

    beforeEach(function(done) {
      request(app)
        .get('/api/blogs/' + newBlog._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          blog = res.body;
          done();
        });
    });

    afterEach(function() {
      blog = {};
    });

    it('should respond with the requested blog', function() {
      blog.name.should.equal('Unit Test Blog Name');
      blog.title.should.equal('Unit Test Title');
      blog.description.should.equal('Unit Test Description');
      blog.long_description.should.equal('Unit Test Long Description');
      blog.author.should.equal('UNIT_TEST_AUTHOR');
      //blog.category.should.instanceOf(ObjectID);
      blog.type.should.equal('VIDEO');
    });

  });

  describe('PUT /api/blogs/:id', function() {
    var updatedBlog;

    beforeEach(function(done) {
      request(app)
        .put('/api/blogs/' + newBlog._id)
        .send({
          name: 'Unit Test Blog Name CHANGE',
          title: 'Unit Test Title CHANGE',
          description: 'Unit Test Description CHANGE',
          long_description: 'Unit Test Long Description CHANGE',
          author: 'UNIT_TEST_AUTHOR CHANGE',
          category: new ObjectID(),
          tags: ['unit', 'test', 'CHANGE'],
          type: 'ARTICLE', //VIDEO, ARTICLE, CELL
          assets: [{type: 'article', data: '<h1> CHANGE </h1>'}]
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedBlog = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedBlog = {};
    });

    it('should respond with the updated blog', function() {
      updatedBlog.name.should.equal('Unit Test Blog Name CHANGE');
      updatedBlog.title.should.equal('Unit Test Title CHANGE');
      updatedBlog.description.should.equal('Unit Test Description CHANGE');
      updatedBlog.long_description.should.equal('Unit Test Long Description CHANGE');
      updatedBlog.author.should.equal('UNIT_TEST_AUTHOR CHANGE');
      //updatedBlog.category.should.instanceOf(ObjectID);
      updatedBlog.type.should.equal('ARTICLE');
    });

  });

  describe('DELETE /api/blogs/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/blogs/' + newBlog._id)
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
        .delete('/api/blogs/' + newBlog._id)
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
