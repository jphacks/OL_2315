// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        v3.21.12
// source: fund.proto

package grpc_fund

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Fund struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid      string                 `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	UserId    string                 `protobuf:"bytes,2,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	PostId    string                 `protobuf:"bytes,3,opt,name=post_id,json=postId,proto3" json:"post_id,omitempty"`
	Amount    float32                `protobuf:"fixed32,4,opt,name=amount,proto3" json:"amount,omitempty"`
	CreatedAt *timestamppb.Timestamp `protobuf:"bytes,5,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt *timestamppb.Timestamp `protobuf:"bytes,6,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
}

func (x *Fund) Reset() {
	*x = Fund{}
	if protoimpl.UnsafeEnabled {
		mi := &file_fund_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Fund) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Fund) ProtoMessage() {}

func (x *Fund) ProtoReflect() protoreflect.Message {
	mi := &file_fund_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Fund.ProtoReflect.Descriptor instead.
func (*Fund) Descriptor() ([]byte, []int) {
	return file_fund_proto_rawDescGZIP(), []int{0}
}

func (x *Fund) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *Fund) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *Fund) GetPostId() string {
	if x != nil {
		return x.PostId
	}
	return ""
}

func (x *Fund) GetAmount() float32 {
	if x != nil {
		return x.Amount
	}
	return 0
}

func (x *Fund) GetCreatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.CreatedAt
	}
	return nil
}

func (x *Fund) GetUpdatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.UpdatedAt
	}
	return nil
}

type ID struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *ID) Reset() {
	*x = ID{}
	if protoimpl.UnsafeEnabled {
		mi := &file_fund_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ID) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ID) ProtoMessage() {}

func (x *ID) ProtoReflect() protoreflect.Message {
	mi := &file_fund_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ID.ProtoReflect.Descriptor instead.
func (*ID) Descriptor() ([]byte, []int) {
	return file_fund_proto_rawDescGZIP(), []int{1}
}

func (x *ID) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

var File_fund_proto protoreflect.FileDescriptor

var file_fund_proto_rawDesc = []byte{
	0x0a, 0x0a, 0x66, 0x75, 0x6e, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x04, 0x66, 0x75,
	0x6e, 0x64, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x1b, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2f, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x22, 0xda, 0x01, 0x0a, 0x04, 0x46, 0x75, 0x6e, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x12, 0x17, 0x0a,
	0x07, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06,
	0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x12, 0x17, 0x0a, 0x07, 0x70, 0x6f, 0x73, 0x74, 0x5f, 0x69,
	0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x70, 0x6f, 0x73, 0x74, 0x49, 0x64, 0x12,
	0x16, 0x0a, 0x06, 0x61, 0x6d, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x02, 0x52,
	0x06, 0x61, 0x6d, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x39, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69,
	0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64,
	0x41, 0x74, 0x12, 0x39, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74,
	0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61,
	0x6d, 0x70, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x22, 0x14, 0x0a,
	0x02, 0x49, 0x44, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x02, 0x69, 0x64, 0x32, 0xae, 0x01, 0x0a, 0x0b, 0x46, 0x75, 0x6e, 0x64, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x12, 0x24, 0x0a, 0x0a, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x46, 0x75, 0x6e,
	0x64, 0x12, 0x0a, 0x2e, 0x66, 0x75, 0x6e, 0x64, 0x2e, 0x46, 0x75, 0x6e, 0x64, 0x1a, 0x0a, 0x2e,
	0x66, 0x75, 0x6e, 0x64, 0x2e, 0x46, 0x75, 0x6e, 0x64, 0x12, 0x23, 0x0a, 0x0b, 0x47, 0x65, 0x74,
	0x46, 0x75, 0x6e, 0x64, 0x42, 0x79, 0x49, 0x64, 0x12, 0x08, 0x2e, 0x66, 0x75, 0x6e, 0x64, 0x2e,
	0x49, 0x44, 0x1a, 0x0a, 0x2e, 0x66, 0x75, 0x6e, 0x64, 0x2e, 0x46, 0x75, 0x6e, 0x64, 0x12, 0x24,
	0x0a, 0x0a, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x46, 0x75, 0x6e, 0x64, 0x12, 0x0a, 0x2e, 0x66,
	0x75, 0x6e, 0x64, 0x2e, 0x46, 0x75, 0x6e, 0x64, 0x1a, 0x0a, 0x2e, 0x66, 0x75, 0x6e, 0x64, 0x2e,
	0x46, 0x75, 0x6e, 0x64, 0x12, 0x2e, 0x0a, 0x0a, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x46, 0x75,
	0x6e, 0x64, 0x12, 0x08, 0x2e, 0x66, 0x75, 0x6e, 0x64, 0x2e, 0x49, 0x44, 0x1a, 0x16, 0x2e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45,
	0x6d, 0x70, 0x74, 0x79, 0x42, 0x0c, 0x5a, 0x0a, 0x2f, 0x67, 0x72, 0x70, 0x63, 0x5f, 0x66, 0x75,
	0x6e, 0x64, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_fund_proto_rawDescOnce sync.Once
	file_fund_proto_rawDescData = file_fund_proto_rawDesc
)

func file_fund_proto_rawDescGZIP() []byte {
	file_fund_proto_rawDescOnce.Do(func() {
		file_fund_proto_rawDescData = protoimpl.X.CompressGZIP(file_fund_proto_rawDescData)
	})
	return file_fund_proto_rawDescData
}

var file_fund_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_fund_proto_goTypes = []interface{}{
	(*Fund)(nil),                  // 0: fund.Fund
	(*ID)(nil),                    // 1: fund.ID
	(*timestamppb.Timestamp)(nil), // 2: google.protobuf.Timestamp
	(*emptypb.Empty)(nil),         // 3: google.protobuf.Empty
}
var file_fund_proto_depIdxs = []int32{
	2, // 0: fund.Fund.created_at:type_name -> google.protobuf.Timestamp
	2, // 1: fund.Fund.updated_at:type_name -> google.protobuf.Timestamp
	0, // 2: fund.FundService.CreateFund:input_type -> fund.Fund
	1, // 3: fund.FundService.GetFundById:input_type -> fund.ID
	0, // 4: fund.FundService.UpdateFund:input_type -> fund.Fund
	1, // 5: fund.FundService.DeleteFund:input_type -> fund.ID
	0, // 6: fund.FundService.CreateFund:output_type -> fund.Fund
	0, // 7: fund.FundService.GetFundById:output_type -> fund.Fund
	0, // 8: fund.FundService.UpdateFund:output_type -> fund.Fund
	3, // 9: fund.FundService.DeleteFund:output_type -> google.protobuf.Empty
	6, // [6:10] is the sub-list for method output_type
	2, // [2:6] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_fund_proto_init() }
func file_fund_proto_init() {
	if File_fund_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_fund_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Fund); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_fund_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ID); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_fund_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_fund_proto_goTypes,
		DependencyIndexes: file_fund_proto_depIdxs,
		MessageInfos:      file_fund_proto_msgTypes,
	}.Build()
	File_fund_proto = out.File
	file_fund_proto_rawDesc = nil
	file_fund_proto_goTypes = nil
	file_fund_proto_depIdxs = nil
}
