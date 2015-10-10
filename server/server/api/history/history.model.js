'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var User = require('./../user/user.model');
var Restaurant = require('./../restaurant/restaurant.model');

var HistorySchema = new Schema({
  restaurant_id: { type: String, ref: 'Restaurant' },
  time: { type: Date, default: Date.now },
  user: { type: String, ref: 'User' }
});

module.exports = mongoose.model('History', HistorySchema);