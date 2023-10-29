// package: fund
// file: fund.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Fund extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): Fund;
    getUserId(): string;
    setUserId(value: string): Fund;
    getPostId(): string;
    setPostId(value: string): Fund;
    getAmount(): number;
    setAmount(value: number): Fund;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Fund;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Fund;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Fund.AsObject;
    static toObject(includeInstance: boolean, msg: Fund): Fund.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Fund, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Fund;
    static deserializeBinaryFromReader(message: Fund, reader: jspb.BinaryReader): Fund;
}

export namespace Fund {
    export type AsObject = {
        uuid: string,
        userId: string,
        postId: string,
        amount: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
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
