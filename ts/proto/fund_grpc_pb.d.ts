// package: fund
// file: fund.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as fund_pb from "./fund_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IFundServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createFund: IFundServiceService_ICreateFund;
    getFundById: IFundServiceService_IGetFundById;
    updateFund: IFundServiceService_IUpdateFund;
    deleteFund: IFundServiceService_IDeleteFund;
}

interface IFundServiceService_ICreateFund extends grpc.MethodDefinition<fund_pb.Fund, fund_pb.Fund> {
    path: "/fund.FundService/CreateFund";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<fund_pb.Fund>;
    requestDeserialize: grpc.deserialize<fund_pb.Fund>;
    responseSerialize: grpc.serialize<fund_pb.Fund>;
    responseDeserialize: grpc.deserialize<fund_pb.Fund>;
}
interface IFundServiceService_IGetFundById extends grpc.MethodDefinition<fund_pb.ID, fund_pb.Fund> {
    path: "/fund.FundService/GetFundById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<fund_pb.ID>;
    requestDeserialize: grpc.deserialize<fund_pb.ID>;
    responseSerialize: grpc.serialize<fund_pb.Fund>;
    responseDeserialize: grpc.deserialize<fund_pb.Fund>;
}
interface IFundServiceService_IUpdateFund extends grpc.MethodDefinition<fund_pb.Fund, fund_pb.Fund> {
    path: "/fund.FundService/UpdateFund";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<fund_pb.Fund>;
    requestDeserialize: grpc.deserialize<fund_pb.Fund>;
    responseSerialize: grpc.serialize<fund_pb.Fund>;
    responseDeserialize: grpc.deserialize<fund_pb.Fund>;
}
interface IFundServiceService_IDeleteFund extends grpc.MethodDefinition<fund_pb.ID, google_protobuf_empty_pb.Empty> {
    path: "/fund.FundService/DeleteFund";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<fund_pb.ID>;
    requestDeserialize: grpc.deserialize<fund_pb.ID>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const FundServiceService: IFundServiceService;

export interface IFundServiceServer {
    createFund: grpc.handleUnaryCall<fund_pb.Fund, fund_pb.Fund>;
    getFundById: grpc.handleUnaryCall<fund_pb.ID, fund_pb.Fund>;
    updateFund: grpc.handleUnaryCall<fund_pb.Fund, fund_pb.Fund>;
    deleteFund: grpc.handleUnaryCall<fund_pb.ID, google_protobuf_empty_pb.Empty>;
}

export interface IFundServiceClient {
    createFund(request: fund_pb.Fund, callback: (error: grpc.ServiceError | null, response: fund_pb.Fund) => void): grpc.ClientUnaryCall;
    createFund(request: fund_pb.Fund, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: fund_pb.Fund) => void): grpc.ClientUnaryCall;
    createFund(request: fund_pb.Fund, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: fund_pb.Fund) => void): grpc.ClientUnaryCall;
    getFundById(request: fund_pb.ID, callback: (error: grpc.ServiceError | null, response: fund_pb.Fund) => void): grpc.ClientUnaryCall;
    getFundById(request: fund_pb.ID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: fund_pb.Fund) => void): grpc.ClientUnaryCall;
    getFundById(request: fund_pb.ID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: fund_pb.Fund) => void): grpc.ClientUnaryCall;
    updateFund(request: fund_pb.Fund, callback: (error: grpc.ServiceError | null, response: fund_pb.Fund) => void): grpc.ClientUnaryCall;
    updateFund(request: fund_pb.Fund, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: fund_pb.Fund) => void): grpc.ClientUnaryCall;
    updateFund(request: fund_pb.Fund, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: fund_pb.Fund) => void): grpc.ClientUnaryCall;
    deleteFund(request: fund_pb.ID, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteFund(request: fund_pb.ID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteFund(request: fund_pb.ID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class FundServiceClient extends grpc.Client implements IFundServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createFund(request: fund_pb.Fund, callback: (error: grpc.ServiceError | null, response: fund_pb.Fund) => void): grpc.ClientUnaryCall;
    public createFund(request: fund_pb.Fund, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: fund_pb.Fund) => void): grpc.ClientUnaryCall;
    public createFund(request: fund_pb.Fund, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: fund_pb.Fund) => void): grpc.ClientUnaryCall;
    public getFundById(request: fund_pb.ID, callback: (error: grpc.ServiceError | null, response: fund_pb.Fund) => void): grpc.ClientUnaryCall;
    public getFundById(request: fund_pb.ID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: fund_pb.Fund) => void): grpc.ClientUnaryCall;
    public getFundById(request: fund_pb.ID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: fund_pb.Fund) => void): grpc.ClientUnaryCall;
    public updateFund(request: fund_pb.Fund, callback: (error: grpc.ServiceError | null, response: fund_pb.Fund) => void): grpc.ClientUnaryCall;
    public updateFund(request: fund_pb.Fund, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: fund_pb.Fund) => void): grpc.ClientUnaryCall;
    public updateFund(request: fund_pb.Fund, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: fund_pb.Fund) => void): grpc.ClientUnaryCall;
    public deleteFund(request: fund_pb.ID, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteFund(request: fund_pb.ID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteFund(request: fund_pb.ID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
