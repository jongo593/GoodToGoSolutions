'use strict';

import mongoose from 'mongoose';
const SCHEMA = mongoose.Schema;

var BlogSchema = new SCHEMA({
  name: String,
  title: String,
  description: String,
  long_description: String,
  author: String,
  created: Date,
  updated: Date,
  category: SCHEMA.Types.ObjectId,
  tags: [String],
  type: {
    type: String,
    enum: ['VIDEO', 'ARTICLE', 'CELL']
  },
  assets: [SCHEMA.Types.Mixed]
});

export default mongoose.model('Blog', BlogSchema);
