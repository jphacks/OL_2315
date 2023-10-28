// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_pb from "./user_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ISocialMediaServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createUser: ISocialMediaServiceService_ICreateUser;
    getUserById: ISocialMediaServiceService_IGetUserById;
    updateUser: ISocialMediaServiceService_IUpdateUser;
    deleteUser: ISocialMediaServiceService_IDeleteUser;
    createFollow: ISocialMediaServiceService_ICreateFollow;
    getFollowById: ISocialMediaServiceService_IGetFollowById;
    updateFollow: ISocialMediaServiceService_IUpdateFollow;
    deleteFollow: ISocialMediaServiceService_IDeleteFollow;
}

interface ISocialMediaServiceService_ICreateUser extends grpc.MethodDefinition<user_pb.User, user_pb.User> {
    path: "/user.SocialMediaService/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.User>;
    requestDeserialize: grpc.deserialize<user_pb.User>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface ISocialMediaServiceService_IGetUserById extends grpc.MethodDefinition<user_pb.ID, user_pb.User> {
    path: "/user.SocialMediaService/GetUserById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.ID>;
    requestDeserialize: grpc.deserialize<user_pb.ID>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface ISocialMediaServiceService_IUpdateUser extends grpc.MethodDefinition<user_pb.User, user_pb.User> {
    path: "/user.SocialMediaService/UpdateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.User>;
    requestDeserialize: grpc.deserialize<user_pb.User>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface ISocialMediaServiceService_IDeleteUser extends grpc.MethodDefinition<user_pb.ID, google_protobuf_empty_pb.Empty> {
    path: "/user.SocialMediaService/DeleteUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.ID>;
    requestDeserialize: grpc.deserialize<user_pb.ID>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ISocialMediaServiceService_ICreateFollow extends grpc.MethodDefinition<user_pb.Follow, user_pb.Follow> {
    path: "/user.SocialMediaService/CreateFollow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.Follow>;
    requestDeserialize: grpc.deserialize<user_pb.Follow>;
    responseSerialize: grpc.serialize<user_pb.Follow>;
    responseDeserialize: grpc.deserialize<user_pb.Follow>;
}
interface ISocialMediaServiceService_IGetFollowById extends grpc.MethodDefinition<user_pb.ID, user_pb.Follow> {
    path: "/user.SocialMediaService/GetFollowById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.ID>;
    requestDeserialize: grpc.deserialize<user_pb.ID>;
    responseSerialize: grpc.serialize<user_pb.Follow>;
    responseDeserialize: grpc.deserialize<user_pb.Follow>;
}
interface ISocialMediaServiceService_IUpdateFollow extends grpc.MethodDefinition<user_pb.Follow, user_pb.Follow> {
    path: "/user.SocialMediaService/UpdateFollow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.Follow>;
    requestDeserialize: grpc.deserialize<user_pb.Follow>;
    responseSerialize: grpc.serialize<user_pb.Follow>;
    responseDeserialize: grpc.deserialize<user_pb.Follow>;
}
interface ISocialMediaServiceService_IDeleteFollow extends grpc.MethodDefinition<user_pb.ID, google_protobuf_empty_pb.Empty> {
    path: "/user.SocialMediaService/DeleteFollow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.ID>;
    requestDeserialize: grpc.deserialize<user_pb.ID>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const SocialMediaServiceService: ISocialMediaServiceService;

export interface ISocialMediaServiceServer {
    createUser: grpc.handleUnaryCall<user_pb.User, user_pb.User>;
    getUserById: grpc.handleUnaryCall<user_pb.ID, user_pb.User>;
    updateUser: grpc.handleUnaryCall<user_pb.User, user_pb.User>;
    deleteUser: grpc.handleUnaryCall<user_pb.ID, google_protobuf_empty_pb.Empty>;
    createFollow: grpc.handleUnaryCall<user_pb.Follow, user_pb.Follow>;
    getFollowById: grpc.handleUnaryCall<user_pb.ID, user_pb.Follow>;
    updateFollow: grpc.handleUnaryCall<user_pb.Follow, user_pb.Follow>;
    deleteFollow: grpc.handleUnaryCall<user_pb.ID, google_protobuf_empty_pb.Empty>;
}

export interface ISocialMediaServiceClient {
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

export class SocialMediaServiceClient extends grpc.Client implements ISocialMediaServiceClient {
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
