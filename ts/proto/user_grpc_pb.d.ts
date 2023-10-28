// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_pb from "./user_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createUser: IUserServiceService_ICreateUser;
    getUserById: IUserServiceService_IGetUserById;
    updateUser: IUserServiceService_IUpdateUser;
    deleteUser: IUserServiceService_IDeleteUser;
    createFollow: IUserServiceService_ICreateFollow;
    getFollowById: IUserServiceService_IGetFollowById;
    updateFollow: IUserServiceService_IUpdateFollow;
    deleteFollow: IUserServiceService_IDeleteFollow;
}

interface IUserServiceService_ICreateUser extends grpc.MethodDefinition<user_pb.User, user_pb.User> {
    path: "/user.UserService/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.User>;
    requestDeserialize: grpc.deserialize<user_pb.User>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface IUserServiceService_IGetUserById extends grpc.MethodDefinition<user_pb.ID, user_pb.User> {
    path: "/user.UserService/GetUserById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.ID>;
    requestDeserialize: grpc.deserialize<user_pb.ID>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface IUserServiceService_IUpdateUser extends grpc.MethodDefinition<user_pb.User, user_pb.User> {
    path: "/user.UserService/UpdateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.User>;
    requestDeserialize: grpc.deserialize<user_pb.User>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface IUserServiceService_IDeleteUser extends grpc.MethodDefinition<user_pb.ID, google_protobuf_empty_pb.Empty> {
    path: "/user.UserService/DeleteUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.ID>;
    requestDeserialize: grpc.deserialize<user_pb.ID>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IUserServiceService_ICreateFollow extends grpc.MethodDefinition<user_pb.Follow, user_pb.Follow> {
    path: "/user.UserService/CreateFollow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.Follow>;
    requestDeserialize: grpc.deserialize<user_pb.Follow>;
    responseSerialize: grpc.serialize<user_pb.Follow>;
    responseDeserialize: grpc.deserialize<user_pb.Follow>;
}
interface IUserServiceService_IGetFollowById extends grpc.MethodDefinition<user_pb.ID, user_pb.Follow> {
    path: "/user.UserService/GetFollowById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.ID>;
    requestDeserialize: grpc.deserialize<user_pb.ID>;
    responseSerialize: grpc.serialize<user_pb.Follow>;
    responseDeserialize: grpc.deserialize<user_pb.Follow>;
}
interface IUserServiceService_IUpdateFollow extends grpc.MethodDefinition<user_pb.Follow, user_pb.Follow> {
    path: "/user.UserService/UpdateFollow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.Follow>;
    requestDeserialize: grpc.deserialize<user_pb.Follow>;
    responseSerialize: grpc.serialize<user_pb.Follow>;
    responseDeserialize: grpc.deserialize<user_pb.Follow>;
}
interface IUserServiceService_IDeleteFollow extends grpc.MethodDefinition<user_pb.ID, google_protobuf_empty_pb.Empty> {
    path: "/user.UserService/DeleteFollow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.ID>;
    requestDeserialize: grpc.deserialize<user_pb.ID>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    createUser: grpc.handleUnaryCall<user_pb.User, user_pb.User>;
    getUserById: grpc.handleUnaryCall<user_pb.ID, user_pb.User>;
    updateUser: grpc.handleUnaryCall<user_pb.User, user_pb.User>;
    deleteUser: grpc.handleUnaryCall<user_pb.ID, google_protobuf_empty_pb.Empty>;
    createFollow: grpc.handleUnaryCall<user_pb.Follow, user_pb.Follow>;
    getFollowById: grpc.handleUnaryCall<user_pb.ID, user_pb.Follow>;
    updateFollow: grpc.handleUnaryCall<user_pb.Follow, user_pb.Follow>;
    deleteFollow: grpc.handleUnaryCall<user_pb.ID, google_protobuf_empty_pb.Empty>;
}

export interface IUserServiceClient {
    createUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    getUserById(request: user_pb.ID, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    getUserById(request: user_pb.ID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    getUserById(request: user_pb.ID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    deleteUser(request: user_pb.ID, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteUser(request: user_pb.ID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteUser(request: user_pb.ID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createFollow(request: user_pb.Follow, callback: (error: grpc.ServiceError | null, response: user_pb.Follow) => void): grpc.ClientUnaryCall;
    createFollow(request: user_pb.Follow, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.Follow) => void): grpc.ClientUnaryCall;
    createFollow(request: user_pb.Follow, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.Follow) => void): grpc.ClientUnaryCall;
    getFollowById(request: user_pb.ID, callback: (error: grpc.ServiceError | null, response: user_pb.Follow) => void): grpc.ClientUnaryCall;
    getFollowById(request: user_pb.ID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.Follow) => void): grpc.ClientUnaryCall;
    getFollowById(request: user_pb.ID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.Follow) => void): grpc.ClientUnaryCall;
    updateFollow(request: user_pb.Follow, callback: (error: grpc.ServiceError | null, response: user_pb.Follow) => void): grpc.ClientUnaryCall;
    updateFollow(request: user_pb.Follow, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.Follow) => void): grpc.ClientUnaryCall;
    updateFollow(request: user_pb.Follow, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.Follow) => void): grpc.ClientUnaryCall;
    deleteFollow(request: user_pb.ID, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteFollow(request: user_pb.ID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteFollow(request: user_pb.ID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public getUserById(request: user_pb.ID, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public getUserById(request: user_pb.ID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public getUserById(request: user_pb.ID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.User, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public deleteUser(request: user_pb.ID, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteUser(request: user_pb.ID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteUser(request: user_pb.ID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createFollow(request: user_pb.Follow, callback: (error: grpc.ServiceError | null, response: user_pb.Follow) => void): grpc.ClientUnaryCall;
    public createFollow(request: user_pb.Follow, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.Follow) => void): grpc.ClientUnaryCall;
    public createFollow(request: user_pb.Follow, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.Follow) => void): grpc.ClientUnaryCall;
    public getFollowById(request: user_pb.ID, callback: (error: grpc.ServiceError | null, response: user_pb.Follow) => void): grpc.ClientUnaryCall;
    public getFollowById(request: user_pb.ID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.Follow) => void): grpc.ClientUnaryCall;
    public getFollowById(request: user_pb.ID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.Follow) => void): grpc.ClientUnaryCall;
    public updateFollow(request: user_pb.Follow, callback: (error: grpc.ServiceError | null, response: user_pb.Follow) => void): grpc.ClientUnaryCall;
    public updateFollow(request: user_pb.Follow, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.Follow) => void): grpc.ClientUnaryCall;
    public updateFollow(request: user_pb.Follow, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.Follow) => void): grpc.ClientUnaryCall;
    public deleteFollow(request: user_pb.ID, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteFollow(request: user_pb.ID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteFollow(request: user_pb.ID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
