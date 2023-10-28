FROM golang:latest

WORKDIR /app

# webpに変換する用
RUN  apt-get update -y
RUN apt-get install libwebp-dev -y

COPY go.mod go.sum ./
RUN go mod download && go mod verify
COPY . .

RUN go build  -o jphacks2023-ol2315-sns
CMD [ "./jphacks2023-ol2315-sns" ]

EXPOSE 50051