/* eslint-disable */
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = '';

export interface Request {
  setTracker?: SetTracker_Request | undefined;
}

export interface Response {
  setTracker?: SetTracker_Response | undefined;
}

export interface RldNodeMessage {
  id: string;
  request?: Request | undefined;
  response?: Response | undefined;
}

export interface Position {
  x: number;
  y: number;
}

export interface Tracker {
  id: number;
  postion?: Position;
}

export interface SetTracker {
  request?: SetTracker_Request | undefined;
  response?: SetTracker_Response | undefined;
  error: string | undefined;
}

export interface SetTracker_Request {
  tracker?: Tracker;
}

export interface SetTracker_Response {}

function createBaseRequest(): Request {
  return { setTracker: undefined };
}

export const Request = {
  encode(
    message: Request,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.setTracker !== undefined) {
      SetTracker_Request.encode(
        message.setTracker,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.setTracker = SetTracker_Request.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request {
    return {
      setTracker: isSet(object.setTracker)
        ? SetTracker_Request.fromJSON(object.setTracker)
        : undefined,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.setTracker !== undefined &&
      (obj.setTracker = message.setTracker
        ? SetTracker_Request.toJSON(message.setTracker)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    message.setTracker =
      object.setTracker !== undefined && object.setTracker !== null
        ? SetTracker_Request.fromPartial(object.setTracker)
        : undefined;
    return message;
  },
};

function createBaseResponse(): Response {
  return { setTracker: undefined };
}

export const Response = {
  encode(
    message: Response,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.setTracker !== undefined) {
      SetTracker_Response.encode(
        message.setTracker,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.setTracker = SetTracker_Response.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Response {
    return {
      setTracker: isSet(object.setTracker)
        ? SetTracker_Response.fromJSON(object.setTracker)
        : undefined,
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.setTracker !== undefined &&
      (obj.setTracker = message.setTracker
        ? SetTracker_Response.toJSON(message.setTracker)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.setTracker =
      object.setTracker !== undefined && object.setTracker !== null
        ? SetTracker_Response.fromPartial(object.setTracker)
        : undefined;
    return message;
  },
};

function createBaseRldNodeMessage(): RldNodeMessage {
  return { id: '', request: undefined, response: undefined };
}

export const RldNodeMessage = {
  encode(
    message: RldNodeMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.request !== undefined) {
      Request.encode(message.request, writer.uint32(18).fork()).ldelim();
    }
    if (message.response !== undefined) {
      Response.encode(message.response, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RldNodeMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRldNodeMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.request = Request.decode(reader, reader.uint32());
          break;
        case 3:
          message.response = Response.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RldNodeMessage {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      request: isSet(object.request)
        ? Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? Response.fromJSON(object.response)
        : undefined,
    };
  },

  toJSON(message: RldNodeMessage): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.request !== undefined &&
      (obj.request = message.request
        ? Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? Response.toJSON(message.response)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RldNodeMessage>, I>>(
    object: I,
  ): RldNodeMessage {
    const message = createBaseRldNodeMessage();
    message.id = object.id ?? '';
    message.request =
      object.request !== undefined && object.request !== null
        ? Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? Response.fromPartial(object.response)
        : undefined;
    return message;
  },
};

function createBasePosition(): Position {
  return { x: 0, y: 0 };
}

export const Position = {
  encode(
    message: Position,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(8).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).int32(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Position {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.int32();
          break;
        case 2:
          message.y = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Position {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
    };
  },

  toJSON(message: Position): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Position>, I>>(object: I): Position {
    const message = createBasePosition();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseTracker(): Tracker {
  return { id: 0, postion: undefined };
}

export const Tracker = {
  encode(
    message: Tracker,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.postion !== undefined) {
      Position.encode(message.postion, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tracker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.postion = Position.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Tracker {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      postion: isSet(object.postion)
        ? Position.fromJSON(object.postion)
        : undefined,
    };
  },

  toJSON(message: Tracker): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.postion !== undefined &&
      (obj.postion = message.postion
        ? Position.toJSON(message.postion)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Tracker>, I>>(object: I): Tracker {
    const message = createBaseTracker();
    message.id = object.id ?? 0;
    message.postion =
      object.postion !== undefined && object.postion !== null
        ? Position.fromPartial(object.postion)
        : undefined;
    return message;
  },
};

function createBaseSetTracker(): SetTracker {
  return { request: undefined, response: undefined, error: undefined };
}

export const SetTracker = {
  encode(
    message: SetTracker,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.request !== undefined) {
      SetTracker_Request.encode(
        message.request,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.response !== undefined) {
      SetTracker_Response.encode(
        message.response,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetTracker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = SetTracker_Request.decode(reader, reader.uint32());
          break;
        case 2:
          message.response = SetTracker_Response.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 3:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetTracker {
    return {
      request: isSet(object.request)
        ? SetTracker_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? SetTracker_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: SetTracker): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? SetTracker_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? SetTracker_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetTracker>, I>>(
    object: I,
  ): SetTracker {
    const message = createBaseSetTracker();
    message.request =
      object.request !== undefined && object.request !== null
        ? SetTracker_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? SetTracker_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseSetTracker_Request(): SetTracker_Request {
  return { tracker: undefined };
}

export const SetTracker_Request = {
  encode(
    message: SetTracker_Request,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tracker !== undefined) {
      Tracker.encode(message.tracker, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetTracker_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetTracker_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tracker = Tracker.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetTracker_Request {
    return {
      tracker: isSet(object.tracker)
        ? Tracker.fromJSON(object.tracker)
        : undefined,
    };
  },

  toJSON(message: SetTracker_Request): unknown {
    const obj: any = {};
    message.tracker !== undefined &&
      (obj.tracker = message.tracker
        ? Tracker.toJSON(message.tracker)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetTracker_Request>, I>>(
    object: I,
  ): SetTracker_Request {
    const message = createBaseSetTracker_Request();
    message.tracker =
      object.tracker !== undefined && object.tracker !== null
        ? Tracker.fromPartial(object.tracker)
        : undefined;
    return message;
  },
};

function createBaseSetTracker_Response(): SetTracker_Response {
  return {};
}

export const SetTracker_Response = {
  encode(
    _: SetTracker_Response,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetTracker_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetTracker_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SetTracker_Response {
    return {};
  },

  toJSON(_: SetTracker_Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetTracker_Response>, I>>(
    _: I,
  ): SetTracker_Response {
    const message = createBaseSetTracker_Response();
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
