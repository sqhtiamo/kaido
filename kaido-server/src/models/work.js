import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// const ObjectId = Schema.Types.ObjectId;
// require('../common/connectMongo');

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
  viewport: Object,
});
// schema.index({inviter: 1});//查询某个用户邀请的人
// schema.index({invitee: 1}, {unique: true});//查询某个用户的邀请者

module.exports = mongoose.model('work', schema);
