package main

import (
	"fmt"
	"jphacks2023-ol2315/db"
	"jphacks2023-ol2315/fund"
	"jphacks2023-ol2315/lib/grpc_fund"
	"jphacks2023-ol2315/lib/grpc_sns"
	"jphacks2023-ol2315/lib/grpc_user"
	"jphacks2023-ol2315/sns"
	"jphacks2023-ol2315/user"
	"log"
	"net"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func main() {
	port := 50051
	listener, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
	if err != nil {
		log.Fatal(err)
	}

	s := grpc.NewServer()
	dbConn := db.ConnectionDB()
	grpc_user.RegisterUserServiceServer(s, user.NewUserService(dbConn))
	grpc_sns.RegisterSNSServiceServer(s, sns.NewSNSService(dbConn))
	grpc_fund.RegisterFundServiceServer(s, fund.NewFundService(dbConn))

	reflection.Register(s)

	log.Printf("start gRPC server port: %v", port)
	s.Serve(listener)

}
