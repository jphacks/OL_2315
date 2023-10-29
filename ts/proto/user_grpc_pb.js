// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_Follow(arg) {
  if (!(arg instanceof user_pb.Follow)) {
    throw new Error('Expected argument of type user.Follow');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_Follow(buffer_arg) {
  return user_pb.Follow.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_ID(arg) {
  if (!(arg instanceof user_pb.ID)) {
    throw new Error('Expected argument of type user.ID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_ID(buffer_arg) {
  return user_pb.ID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_User(arg) {
  if (!(arg instanceof user_pb.User)) {
    throw new Error('Expected argument of type user.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_User(buffer_arg) {
  return user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  createUser: {
    path: '/user.UserService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.User,
    responseType: user_pb.User,
    requestSerialize: serialize_user_User,
    requestDeserialize: deserialize_user_User,
    responseSerialize: serialize_user_User,
    responseDeserialize: deserialize_user_User,
  },
  getUserById: {
    path: '/user.UserService/GetUserById',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ID,
    responseType: user_pb.User,
    requestSerialize: serialize_user_ID,
    requestDeserialize: deserialize_user_ID,
    responseSerialize: serialize_user_User,
    responseDeserialize: deserialize_user_User,
  },
  updateUser: {
    path: '/user.UserService/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.User,
    responseType: user_pb.User,
    requestSerialize: serialize_user_User,
    requestDeserialize: deserialize_user_User,
    responseSerialize: serialize_user_User,
    responseDeserialize: deserialize_user_User,
  },
  deleteUser: {
    path: '/user.UserService/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ID,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_user_ID,
    requestDeserialize: deserialize_user_ID,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  followUser: {
    path: '/user.UserService/FollowUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.Follow,
    responseType: user_pb.Follow,
    requestSerialize: serialize_user_Follow,
    requestDeserialize: deserialize_user_Follow,
    responseSerialize: serialize_user_Follow,
    responseDeserialize: deserialize_user_Follow,
  },
  getFollowById: {
    path: '/user.UserService/GetFollowById',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ID,
    responseType: user_pb.Follow,
    requestSerialize: serialize_user_ID,
    requestDeserialize: deserialize_user_ID,
    responseSerialize: serialize_user_Follow,
    responseDeserialize: deserialize_user_Follow,
  },
  deleteFollow: {
    path: '/user.UserService/DeleteFollow',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ID,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_user_ID,
    requestDeserialize: deserialize_user_ID,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
