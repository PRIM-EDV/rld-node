FROM node:16.13.0

RUN apt update && apt install protobuf-compiler -y

WORKDIR /opt/rld-node/server

# Install server source dependancies
COPY ./rpi/server/*.json ./
RUN npm install

# Build server
COPY ./rpi/server/src ./src
COPY ./protocol ../protocol

# Build protocol
RUN npm run proto:generate:docker

# Run startscript
COPY ./rpi/run.sh ./
RUN chmod +x run.sh

CMD ["./run.sh"]