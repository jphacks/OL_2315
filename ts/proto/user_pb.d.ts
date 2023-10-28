// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class User extends jspb.Message { 
    getUserUuid(): string;
    setUserUuid(value: string): User;
    getAuthSub(): string;
    setAuthSub(value: string): User;
    getHandle(): string;
    setHandle(value: string): User;
    getScreenName(): string;
    setScreenName(value: string): User;
    getBio(): string;
    setBio(value: string): User;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): User;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): User;
    getRole(): Role;
    setRole(value: Role): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        userUuid: string,
        authSub: string,
        handle: string,
        screenName: string,
        bio: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        role: Role,
    }
}

export class Follow extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): Follow;
    getFollowerId(): string;
    setFollowerId(value: string): Follow;
    getFolloweeId(): string;
    setFolloweeId(value: string): Follow;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Follow.AsObject;
    static toObject(includeInstance: boolean, msg: Follow): Follow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Follow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Follow;
    static deserializeBinaryFromReader(message: Follow, reader: jspb.BinaryReader): Follow;
}

export namespace Follow {
    export type AsObject = {
        uuid: string,
        followerId: string,
        followeeId: string,
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

export enum Role {
    USER = 0,
    ADMIN = 1,
}
