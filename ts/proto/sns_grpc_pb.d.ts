// package: sns
// file: sns.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as sns_pb from "./sns_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ISNSServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPost: ISNSServiceService_ICreatePost;
    getPostById: ISNSServiceService_IGetPostById;
    updatePost: ISNSServiceService_IUpdatePost;
    deletePost: ISNSServiceService_IDeletePost;
    createComment: ISNSServiceService_ICreateComment;
    getCommentById: ISNSServiceService_IGetCommentById;
    updateComment: ISNSServiceService_IUpdateComment;
    deleteComment: ISNSServiceService_IDeleteComment;
    createLike: ISNSServiceService_ICreateLike;
    getLikeById: ISNSServiceService_IGetLikeById;
    updateLike: ISNSServiceService_IUpdateLike;
    deleteLike: ISNSServiceService_IDeleteLike;
}

interface ISNSServiceService_ICreatePost extends grpc.MethodDefinition<sns_pb.Post, sns_pb.Post> {
    path: "/sns.SNSService/CreatePost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sns_pb.Post>;
    requestDeserialize: grpc.deserialize<sns_pb.Post>;
    responseSerialize: grpc.serialize<sns_pb.Post>;
    responseDeserialize: grpc.deserialize<sns_pb.Post>;
}
interface ISNSServiceService_IGetPostById extends grpc.MethodDefinition<sns_pb.ID, sns_pb.Post> {
    path: "/sns.SNSService/GetPostById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sns_pb.ID>;
    requestDeserialize: grpc.deserialize<sns_pb.ID>;
    responseSerialize: grpc.serialize<sns_pb.Post>;
    responseDeserialize: grpc.deserialize<sns_pb.Post>;
}
interface ISNSServiceService_IUpdatePost extends grpc.MethodDefinition<sns_pb.Post, sns_pb.Post> {
    path: "/sns.SNSService/UpdatePost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sns_pb.Post>;
    requestDeserialize: grpc.deserialize<sns_pb.Post>;
    responseSerialize: grpc.serialize<sns_pb.Post>;
    responseDeserialize: grpc.deserialize<sns_pb.Post>;
}
interface ISNSServiceService_IDeletePost extends grpc.MethodDefinition<sns_pb.ID, google_protobuf_empty_pb.Empty> {
    path: "/sns.SNSService/DeletePost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sns_pb.ID>;
    requestDeserialize: grpc.deserialize<sns_pb.ID>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ISNSServiceService_ICreateComment extends grpc.MethodDefinition<sns_pb.Comment, sns_pb.Comment> {
    path: "/sns.SNSService/CreateComment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sns_pb.Comment>;
    requestDeserialize: grpc.deserialize<sns_pb.Comment>;
    responseSerialize: grpc.serialize<sns_pb.Comment>;
    responseDeserialize: grpc.deserialize<sns_pb.Comment>;
}
interface ISNSServiceService_IGetCommentById extends grpc.MethodDefinition<sns_pb.ID, sns_pb.Comment> {
    path: "/sns.SNSService/GetCommentById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sns_pb.ID>;
    requestDeserialize: grpc.deserialize<sns_pb.ID>;
    responseSerialize: grpc.serialize<sns_pb.Comment>;
    responseDeserialize: grpc.deserialize<sns_pb.Comment>;
}
interface ISNSServiceService_IUpdateComment extends grpc.MethodDefinition<sns_pb.Comment, sns_pb.Comment> {
    path: "/sns.SNSService/UpdateComment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sns_pb.Comment>;
    requestDeserialize: grpc.deserialize<sns_pb.Comment>;
    responseSerialize: grpc.serialize<sns_pb.Comment>;
    responseDeserialize: grpc.deserialize<sns_pb.Comment>;
}
interface ISNSServiceService_IDeleteComment extends grpc.MethodDefinition<sns_pb.ID, google_protobuf_empty_pb.Empty> {
    path: "/sns.SNSService/DeleteComment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sns_pb.ID>;
    requestDeserialize: grpc.deserialize<sns_pb.ID>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ISNSServiceService_ICreateLike extends grpc.MethodDefinition<sns_pb.Like, sns_pb.Like> {
    path: "/sns.SNSService/CreateLike";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sns_pb.Like>;
    requestDeserialize: grpc.deserialize<sns_pb.Like>;
    responseSerialize: grpc.serialize<sns_pb.Like>;
    responseDeserialize: grpc.deserialize<sns_pb.Like>;
}
interface ISNSServiceService_IGetLikeById extends grpc.MethodDefinition<sns_pb.ID, sns_pb.Like> {
    path: "/sns.SNSService/GetLikeById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sns_pb.ID>;
    requestDeserialize: grpc.deserialize<sns_pb.ID>;
    responseSerialize: grpc.serialize<sns_pb.Like>;
    responseDeserialize: grpc.deserialize<sns_pb.Like>;
}
interface ISNSServiceService_IUpdateLike extends grpc.MethodDefinition<sns_pb.Like, sns_pb.Like> {
    path: "/sns.SNSService/UpdateLike";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sns_pb.Like>;
    requestDeserialize: grpc.deserialize<sns_pb.Like>;
    responseSerialize: grpc.serialize<sns_pb.Like>;
    responseDeserialize: grpc.deserialize<sns_pb.Like>;
}
interface ISNSServiceService_IDeleteLike extends grpc.MethodDefinition<sns_pb.ID, google_protobuf_empty_pb.Empty> {
    path: "/sns.SNSService/DeleteLike";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sns_pb.ID>;
    requestDeserialize: grpc.deserialize<sns_pb.ID>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const SNSServiceService: ISNSServiceService;

export interface ISNSServiceServer {
    createPost: grpc.handleUnaryCall<sns_pb.Post, sns_pb.Post>;
    getPostById: grpc.handleUnaryCall<sns_pb.ID, sns_pb.Post>;
    updatePost: grpc.handleUnaryCall<sns_pb.Post, sns_pb.Post>;
    deletePost: grpc.handleUnaryCall<sns_pb.ID, google_protobuf_empty_pb.Empty>;
    createComment: grpc.handleUnaryCall<sns_pb.Comment, sns_pb.Comment>;
    getCommentById: grpc.handleUnaryCall<sns_pb.ID, sns_pb.Comment>;
    updateComment: grpc.handleUnaryCall<sns_pb.Comment, sns_pb.Comment>;
    deleteComment: grpc.handleUnaryCall<sns_pb.ID, google_protobuf_empty_pb.Empty>;
    createLike: grpc.handleUnaryCall<sns_pb.Like, sns_pb.Like>;
    getLikeById: grpc.handleUnaryCall<sns_pb.ID, sns_pb.Like>;
    updateLike: grpc.handleUnaryCall<sns_pb.Like, sns_pb.Like>;
    deleteLike: grpc.handleUnaryCall<sns_pb.ID, google_protobuf_empty_pb.Empty>;
}

export interface ISNSServiceClient {
    createPost(request: sns_pb.Post, callback: (error: grpc.ServiceError | null, response: sns_pb.Post) => void): grpc.ClientUnaryCall;
    createPost(request: sns_pb.Post, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sns_pb.Post) => void): grpc.ClientUnaryCall;
    createPost(request: sns_pb.Post, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sns_pb.Post) => void): grpc.ClientUnaryCall;
    getPostById(request: sns_pb.ID, callback: (error: grpc.ServiceError | null, response: sns_pb.Post) => void): grpc.ClientUnaryCall;
    getPostById(request: sns_pb.ID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sns_pb.Post) => void): grpc.ClientUnaryCall;
    getPostById(request: sns_pb.ID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sns_pb.Post) => void): grpc.ClientUnaryCall;
    updatePost(request: sns_pb.Post, callback: (error: grpc.ServiceError | null, response: sns_pb.Post) => void): grpc.ClientUnaryCall;
    updatePost(request: sns_pb.Post, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sns_pb.Post) => void): grpc.ClientUnaryCall;
    updatePost(request: sns_pb.Post, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sns_pb.Post) => void): grpc.ClientUnaryCall;
    deletePost(request: sns_pb.ID, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deletePost(request: sns_pb.ID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deletePost(request: sns_pb.ID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createComment(request: sns_pb.Comment, callback: (error: grpc.ServiceError | null, response: sns_pb.Comment) => void): grpc.ClientUnaryCall;
    createComment(request: sns_pb.Comment, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sns_pb.Comment) => void): grpc.ClientUnaryCall;
    createComment(request: sns_pb.Comment, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sns_pb.Comment) => void): grpc.ClientUnaryCall;
    getCommentById(request: sns_pb.ID, callback: (error: grpc.ServiceError | null, response: sns_pb.Comment) => void): grpc.ClientUnaryCall;
    getCommentById(request: sns_pb.ID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sns_pb.Comment) => void): grpc.ClientUnaryCall;
    getCommentById(request: sns_pb.ID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sns_pb.Comment) => void): grpc.ClientUnaryCall;
    updateComment(request: sns_pb.Comment, callback: (error: grpc.ServiceError | null, response: sns_pb.Comment) => void): grpc.ClientUnaryCall;
    updateComment(request: sns_pb.Comment, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sns_pb.Comment) => void): grpc.ClientUnaryCall;
    updateComment(request: sns_pb.Comment, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sns_pb.Comment) => void): grpc.ClientUnaryCall;
    deleteComment(request: sns_pb.ID, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteComment(request: sns_pb.ID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteComment(request: sns_pb.ID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createLike(request: sns_pb.Like, callback: (error: grpc.ServiceError | null, response: sns_pb.Like) => void): grpc.ClientUnaryCall;
    createLike(request: sns_pb.Like, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sns_pb.Like) => void): grpc.ClientUnaryCall;
    createLike(request: sns_pb.Like, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sns_pb.Like) => void): grpc.ClientUnaryCall;
    getLikeById(request: sns_pb.ID, callback: (error: grpc.ServiceError | null, response: sns_pb.Like) => void): grpc.ClientUnaryCall;
    getLikeById(request: sns_pb.ID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sns_pb.Like) => void): grpc.ClientUnaryCall;
    getLikeById(request: sns_pb.ID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sns_pb.Like) => void): grpc.ClientUnaryCall;
    updateLike(request: sns_pb.Like, callback: (error: grpc.ServiceError | null, response: sns_pb.Like) => void): grpc.ClientUnaryCall;
    updateLike(request: sns_pb.Like, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sns_pb.Like) => void): grpc.ClientUnaryCall;
    updateLike(request: sns_pb.Like, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sns_pb.Like) => void): grpc.ClientUnaryCall;
    deleteLike(request: sns_pb.ID, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteLike(request: sns_pb.ID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteLike(request: sns_pb.ID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class SNSServiceClient extends grpc.Client implements ISNSServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createPost(request: sns_pb.Post, callback: (error: grpc.ServiceError | null, response: sns_pb.Post) => void): grpc.ClientUnaryCall;
    public createPost(request: sns_pb.Post, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sns_pb.Post) => void): grpc.ClientUnaryCall;
    public createPost(request: sns_pb.Post, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sns_pb.Post) => void): grpc.ClientUnaryCall;
    public getPostById(request: sns_pb.ID, callback: (error: grpc.ServiceError | null, response: sns_pb.Post) => void): grpc.ClientUnaryCall;
    public getPostById(request: sns_pb.ID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sns_pb.Post) => void): grpc.ClientUnaryCall;
    public getPostById(request: sns_pb.ID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sns_pb.Post) => void): grpc.ClientUnaryCall;
    public updatePost(request: sns_pb.Post, callback: (error: grpc.ServiceError | null, response: sns_pb.Post) => void): grpc.ClientUnaryCall;
    public updatePost(request: sns_pb.Post, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sns_pb.Post) => void): grpc.ClientUnaryCall;
    public updatePost(request: sns_pb.Post, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sns_pb.Post) => void): grpc.ClientUnaryCall;
    public deletePost(request: sns_pb.ID, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deletePost(request: sns_pb.ID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deletePost(request: sns_pb.ID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createComment(request: sns_pb.Comment, callback: (error: grpc.ServiceError | null, response: sns_pb.Comment) => void): grpc.ClientUnaryCall;
    public createComment(request: sns_pb.Comment, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sns_pb.Comment) => void): grpc.ClientUnaryCall;
    public createComment(request: sns_pb.Comment, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sns_pb.Comment) => void): grpc.ClientUnaryCall;
    public getCommentById(request: sns_pb.ID, callback: (error: grpc.ServiceError | null, response: sns_pb.Comment) => void): grpc.ClientUnaryCall;
    public getCommentById(request: sns_pb.ID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sns_pb.Comment) => void): grpc.ClientUnaryCall;
    public getCommentById(request: sns_pb.ID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sns_pb.Comment) => void): grpc.ClientUnaryCall;
    public updateComment(request: sns_pb.Comment, callback: (error: grpc.ServiceError | null, response: sns_pb.Comment) => void): grpc.ClientUnaryCall;
    public updateComment(request: sns_pb.Comment, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sns_pb.Comment) => void): grpc.ClientUnaryCall;
    public updateComment(request: sns_pb.Comment, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sns_pb.Comment) => void): grpc.ClientUnaryCall;
    public deleteComment(request: sns_pb.ID, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteComment(request: sns_pb.ID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteComment(request: sns_pb.ID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createLike(request: sns_pb.Like, callback: (error: grpc.ServiceError | null, response: sns_pb.Like) => void): grpc.ClientUnaryCall;
    public createLike(request: sns_pb.Like, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sns_pb.Like) => void): grpc.ClientUnaryCall;
    public createLike(request: sns_pb.Like, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sns_pb.Like) => void): grpc.ClientUnaryCall;
    public getLikeById(request: sns_pb.ID, callback: (error: grpc.ServiceError | null, response: sns_pb.Like) => void): grpc.ClientUnaryCall;
    public getLikeById(request: sns_pb.ID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sns_pb.Like) => void): grpc.ClientUnaryCall;
    public getLikeById(request: sns_pb.ID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sns_pb.Like) => void): grpc.ClientUnaryCall;
    public updateLike(request: sns_pb.Like, callback: (error: grpc.ServiceError | null, response: sns_pb.Like) => void): grpc.ClientUnaryCall;
    public updateLike(request: sns_pb.Like, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sns_pb.Like) => void): grpc.ClientUnaryCall;
    public updateLike(request: sns_pb.Like, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sns_pb.Like) => void): grpc.ClientUnaryCall;
    public deleteLike(request: sns_pb.ID, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteLike(request: sns_pb.ID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteLike(request: sns_pb.ID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
