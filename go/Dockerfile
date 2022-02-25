FROM golang:latest as build

WORKDIR /app

COPY . .

RUN go build -o .

FROM scratch

COPY --from=build /app/hello .

ENTRYPOINT [ "./hello" ]