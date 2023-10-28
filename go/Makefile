gen:
	rm -r lib/*
	protoc -I=./../proto --go_out=lib --go-grpc_out=lib ./../proto/*.proto

build:
	docker compose build

up:
	docker compose up

ps:
	docker compose ps

fmt:
	gofmt -s -l -w .