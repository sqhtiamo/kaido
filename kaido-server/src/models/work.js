import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import config from '../config';

mongoose.connect(config.mongo.uri);

mongoose.connection.on('error', () => {
  console.error('MongoDB Connection Error. Make sure MongoDB is running.');
});
mongoose.connection.once('open', () => {
  console.log('open mongodb success');
});
const Schema = mongoose.Schema;

autoIncrement.initialize(mongoose.connection);

const schema = new Schema({
  created: {
    type: Date,
    default: Date.now,
  },
  workId: {
    type: Number,
    unique: true,
  },
  pages: [{
    layers: [{
      content: String,
      style: {
        height: String,
        width: String,
        'font-size': Number,
        'line-height': Number,
        position: String,
        top: String,
        left: String,
        padding: String,
        'text-align': String,
        zIndex: Number,
        opacity: Number,
        color: String,
        'background-color': String,
        'border-width': Number,
        'border-radius': Number,
        'border-style': String,
      },
      animation: [{
        class: String,
        style: {
          'animation-duration': Number,
          'animation-delay': Number,
          'animation-iteration-count': Number,
        },
      }],
      selected: Boolean,
      layerType: String,
      index: Number,
    }],
  }],
});

schema.plugin(autoIncrement.plugin, { model: 'work', field: 'workId' });
module.exports = mongoose.model('work', schema);
