/**
 * Blog model events
 */

'use strict';

import {EventEmitter} from 'events';
import Blog from './blog.model';
var BlogsEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
BlogsEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Blog.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    Blog.emit(event + ':' + doc._id, doc);
    Blog.emit(event, doc);
  }
}

export default BlogsEvents;
