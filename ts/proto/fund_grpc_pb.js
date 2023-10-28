// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var fund_pb = require('./fund_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_fund_Fund(arg) {
  if (!(arg instanceof fund_pb.Fund)) {
    throw new Error('Expected argument of type fund.Fund');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fund_Fund(buffer_arg) {
  return fund_pb.Fund.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fund_ID(arg) {
  if (!(arg instanceof fund_pb.ID)) {
    throw new Error('Expected argument of type fund.ID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fund_ID(buffer_arg) {
  return fund_pb.ID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var FundServiceService = exports.FundServiceService = {
  createFund: {
    path: '/fund.FundService/CreateFund',
    requestStream: false,
    responseStream: false,
    requestType: fund_pb.Fund,
    responseType: fund_pb.Fund,
    requestSerialize: serialize_fund_Fund,
    requestDeserialize: deserialize_fund_Fund,
    responseSerialize: serialize_fund_Fund,
    responseDeserialize: deserialize_fund_Fund,
  },
  getFundById: {
    path: '/fund.FundService/GetFundById',
    requestStream: false,
    responseStream: false,
    requestType: fund_pb.ID,
    responseType: fund_pb.Fund,
    requestSerialize: serialize_fund_ID,
    requestDeserialize: deserialize_fund_ID,
    responseSerialize: serialize_fund_Fund,
    responseDeserialize: deserialize_fund_Fund,
  },
  updateFund: {
    path: '/fund.FundService/UpdateFund',
    requestStream: false,
    responseStream: false,
    requestType: fund_pb.Fund,
    responseType: fund_pb.Fund,
    requestSerialize: serialize_fund_Fund,
    requestDeserialize: deserialize_fund_Fund,
    responseSerialize: serialize_fund_Fund,
    responseDeserialize: deserialize_fund_Fund,
  },
  deleteFund: {
    path: '/fund.FundService/DeleteFund',
    requestStream: false,
    responseStream: false,
    requestType: fund_pb.ID,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_fund_ID,
    requestDeserialize: deserialize_fund_ID,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.FundServiceClient = grpc.makeGenericClientConstructor(FundServiceService);
