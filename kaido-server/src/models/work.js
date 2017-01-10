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

// const ObjectId = Schema.Types.ObjectId;
// require('../common/connectMongo'         );

// let schema = new Schema({
//   inviter: {//邀请者
//     $type: String,
//     required: true,
//   },
//   invitee: {//被邀请者
//     $type: String,
//     required: true,
//   }
// }, {collection: 'invitation', timestamps: true, typeKey: '$type'});

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
        'background-color': String,
        color: String,
        height: String,
        width: String,
        position: String,
        top: String,
        left: String,
        padding: String,
        'text-align': String,
        zIndex: Number,
      },
    }],
  }],
});
// schema.index({inviter: 1});//查询某个用户邀请的人
// schema.index({invitee: 1}, {unique: true});//查询某个用户的邀请者
schema.plugin(autoIncrement.plugin, { model: 'work', field: 'workId' });
module.exports = mongoose.model('work', schema);
