// package: sns
// file: sns.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Post extends jspb.Message { 
    getPostUuid(): string;
    setPostUuid(value: string): Post;
    getUserId(): string;
    setUserId(value: string): Post;
    getBody(): string;
    setBody(value: string): Post;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Post;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Post;
    getIsPublic(): boolean;
    setIsPublic(value: boolean): Post;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Post.AsObject;
    static toObject(includeInstance: boolean, msg: Post): Post.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Post, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Post;
    static deserializeBinaryFromReader(message: Post, reader: jspb.BinaryReader): Post;
}

export namespace Post {
    export type AsObject = {
        postUuid: string,
        userId: string,
        body: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        isPublic: boolean,
    }
}

export class Comment extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): Comment;
    getContent(): string;
    setContent(value: string): Comment;
    getUserId(): string;
    setUserId(value: string): Comment;
    getPostId(): string;
    setPostId(value: string): Comment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Comment.AsObject;
    static toObject(includeInstance: boolean, msg: Comment): Comment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Comment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Comment;
    static deserializeBinaryFromReader(message: Comment, reader: jspb.BinaryReader): Comment;
}

export namespace Comment {
    export type AsObject = {
        uuid: string,
        content: string,
        userId: string,
        postId: string,
    }
}

export class Like extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): Like;
    getPostCommentId(): string;
    setPostCommentId(value: string): Like;
    getUserId(): string;
    setUserId(value: string): Like;
    getPostId(): string;
    setPostId(value: string): Like;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Like.AsObject;
    static toObject(includeInstance: boolean, msg: Like): Like.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Like, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Like;
    static deserializeBinaryFromReader(message: Like, reader: jspb.BinaryReader): Like;
}

export namespace Like {
    export type AsObject = {
        uuid: string,
        postCommentId: string,
        userId: string,
        postId: string,
    }
}

export class ID extends jspb.Message { 
    getId(): string;
    setId(value: string): ID;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ID.AsObject;
    static toObject(includeInstance: boolean, msg: ID): ID.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ID, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ID;
    static deserializeBinaryFromReader(message: ID, reader: jspb.BinaryReader): ID;
}

export namespace ID {
    export type AsObject = {
        id: string,
    }
}
