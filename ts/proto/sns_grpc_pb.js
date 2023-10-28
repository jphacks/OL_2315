// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var sns_pb = require('./sns_pb.js');
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

function serialize_sns_Comment(arg) {
  if (!(arg instanceof sns_pb.Comment)) {
    throw new Error('Expected argument of type sns.Comment');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sns_Comment(buffer_arg) {
  return sns_pb.Comment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sns_ID(arg) {
  if (!(arg instanceof sns_pb.ID)) {
    throw new Error('Expected argument of type sns.ID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sns_ID(buffer_arg) {
  return sns_pb.ID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sns_Like(arg) {
  if (!(arg instanceof sns_pb.Like)) {
    throw new Error('Expected argument of type sns.Like');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sns_Like(buffer_arg) {
  return sns_pb.Like.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sns_Post(arg) {
  if (!(arg instanceof sns_pb.Post)) {
    throw new Error('Expected argument of type sns.Post');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sns_Post(buffer_arg) {
  return sns_pb.Post.deserializeBinary(new Uint8Array(buffer_arg));
}


var SocialMediaServiceService = exports.SocialMediaServiceService = {
  createPost: {
    path: '/sns.SocialMediaService/CreatePost',
    requestStream: false,
    responseStream: false,
    requestType: sns_pb.Post,
    responseType: sns_pb.Post,
    requestSerialize: serialize_sns_Post,
    requestDeserialize: deserialize_sns_Post,
    responseSerialize: serialize_sns_Post,
    responseDeserialize: deserialize_sns_Post,
  },
  getPostById: {
    path: '/sns.SocialMediaService/GetPostById',
    requestStream: false,
    responseStream: false,
    requestType: sns_pb.ID,
    responseType: sns_pb.Post,
    requestSerialize: serialize_sns_ID,
    requestDeserialize: deserialize_sns_ID,
    responseSerialize: serialize_sns_Post,
    responseDeserialize: deserialize_sns_Post,
  },
  updatePost: {
    path: '/sns.SocialMediaService/UpdatePost',
    requestStream: false,
    responseStream: false,
    requestType: sns_pb.Post,
    responseType: sns_pb.Post,
    requestSerialize: serialize_sns_Post,
    requestDeserialize: deserialize_sns_Post,
    responseSerialize: serialize_sns_Post,
    responseDeserialize: deserialize_sns_Post,
  },
  deletePost: {
    path: '/sns.SocialMediaService/DeletePost',
    requestStream: false,
    responseStream: false,
    requestType: sns_pb.ID,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sns_ID,
    requestDeserialize: deserialize_sns_ID,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  createComment: {
    path: '/sns.SocialMediaService/CreateComment',
    requestStream: false,
    responseStream: false,
    requestType: sns_pb.Comment,
    responseType: sns_pb.Comment,
    requestSerialize: serialize_sns_Comment,
    requestDeserialize: deserialize_sns_Comment,
    responseSerialize: serialize_sns_Comment,
    responseDeserialize: deserialize_sns_Comment,
  },
  getCommentById: {
    path: '/sns.SocialMediaService/GetCommentById',
    requestStream: false,
    responseStream: false,
    requestType: sns_pb.ID,
    responseType: sns_pb.Comment,
    requestSerialize: serialize_sns_ID,
    requestDeserialize: deserialize_sns_ID,
    responseSerialize: serialize_sns_Comment,
    responseDeserialize: deserialize_sns_Comment,
  },
  updateComment: {
    path: '/sns.SocialMediaService/UpdateComment',
    requestStream: false,
    responseStream: false,
    requestType: sns_pb.Comment,
    responseType: sns_pb.Comment,
    requestSerialize: serialize_sns_Comment,
    requestDeserialize: deserialize_sns_Comment,
    responseSerialize: serialize_sns_Comment,
    responseDeserialize: deserialize_sns_Comment,
  },
  deleteComment: {
    path: '/sns.SocialMediaService/DeleteComment',
    requestStream: false,
    responseStream: false,
    requestType: sns_pb.ID,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sns_ID,
    requestDeserialize: deserialize_sns_ID,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  createLike: {
    path: '/sns.SocialMediaService/CreateLike',
    requestStream: false,
    responseStream: false,
    requestType: sns_pb.Like,
    responseType: sns_pb.Like,
    requestSerialize: serialize_sns_Like,
    requestDeserialize: deserialize_sns_Like,
    responseSerialize: serialize_sns_Like,
    responseDeserialize: deserialize_sns_Like,
  },
  getLikeById: {
    path: '/sns.SocialMediaService/GetLikeById',
    requestStream: false,
    responseStream: false,
    requestType: sns_pb.ID,
    responseType: sns_pb.Like,
    requestSerialize: serialize_sns_ID,
    requestDeserialize: deserialize_sns_ID,
    responseSerialize: serialize_sns_Like,
    responseDeserialize: deserialize_sns_Like,
  },
  updateLike: {
    path: '/sns.SocialMediaService/UpdateLike',
    requestStream: false,
    responseStream: false,
    requestType: sns_pb.Like,
    responseType: sns_pb.Like,
    requestSerialize: serialize_sns_Like,
    requestDeserialize: deserialize_sns_Like,
    responseSerialize: serialize_sns_Like,
    responseDeserialize: deserialize_sns_Like,
  },
  deleteLike: {
    path: '/sns.SocialMediaService/DeleteLike',
    requestStream: false,
    responseStream: false,
    requestType: sns_pb.ID,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sns_ID,
    requestDeserialize: deserialize_sns_ID,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.SocialMediaServiceClient = grpc.makeGenericClientConstructor(SocialMediaServiceService);
