'use strict';

import mongoose from 'mongoose';
const SCHEMA = mongoose.Schema;

var CategorySchema = new SCHEMA({
  name: String,
  assets: [SCHEMA.Types.Mixed]
});

export default mongoose.model('Category', CategorySchema);
