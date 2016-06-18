/**
 * Main application file
 */

'use strict';

import express from 'express';
import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');
import config from './config/environment';
import http from 'http';
import cluster from 'cluster';
import _ from 'lodash';

// Start server
function startServer() {
  app.angularFullstack = server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

if(cluster.isMaster && process.env.NODE_ENV !== 'test') {

  _.forEach(_.range(config.cluster.workers), (v, i) => {
    cluster.fork();
  });

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });

} else {

// Connect to MongoDB
  mongoose.connect(config.mongo.uri, config.mongo.options);
  mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
  });

// Populate databases with sample data
  if (config.seedDB) { require('./config/seed'); }

// Setup server
  var app = express();
  var server = http.createServer(app);
  require('./config/express').default(app);
  require('./routes').default(app);

  setImmediate(startServer);
}


// Expose app
exports = module.exports = app;
