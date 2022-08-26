/* eslint-disable */
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = '';

export interface Request {
  setRldInfo?: SetRldInfo_Request | undefined;
}

export interface Response {
  setRldInfo?: SetRldInfo_Response | undefined;
}

export interface RldMessage {
  id: string;
  request?: Request | undefined;
  response?: Response | undefined;
}

export interface RldInfo {
  id: number;
  flags: number;
  px: number;
  py: number;
}

export interface SetRldInfo {}

export interface SetRldInfo_Response {}

export interface SetRldInfo_Request {
  info?: RldInfo;
}

function createBaseRequest(): Request {
  return { setRldInfo: undefined };
}

export const Request = {
  encode(
    message: Request,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.setRldInfo !== undefined) {
      SetRldInfo_Request.encode(
        message.setRldInfo,
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
          message.setRldInfo = SetRldInfo_Request.decode(
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
      setRldInfo: isSet(object.setRldInfo)
        ? SetRldInfo_Request.fromJSON(object.setRldInfo)
        : undefined,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.setRldInfo !== undefined &&
      (obj.setRldInfo = message.setRldInfo
        ? SetRldInfo_Request.toJSON(message.setRldInfo)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    message.setRldInfo =
      object.setRldInfo !== undefined && object.setRldInfo !== null
        ? SetRldInfo_Request.fromPartial(object.setRldInfo)
        : undefined;
    return message;
  },
};

function createBaseResponse(): Response {
  return { setRldInfo: undefined };
}

export const Response = {
  encode(
    message: Response,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.setRldInfo !== undefined) {
      SetRldInfo_Response.encode(
        message.setRldInfo,
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
          message.setRldInfo = SetRldInfo_Response.decode(
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
      setRldInfo: isSet(object.setRldInfo)
        ? SetRldInfo_Response.fromJSON(object.setRldInfo)
        : undefined,
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.setRldInfo !== undefined &&
      (obj.setRldInfo = message.setRldInfo
        ? SetRldInfo_Response.toJSON(message.setRldInfo)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.setRldInfo =
      object.setRldInfo !== undefined && object.setRldInfo !== null
        ? SetRldInfo_Response.fromPartial(object.setRldInfo)
        : undefined;
    return message;
  },
};

function createBaseRldMessage(): RldMessage {
  return { id: '', request: undefined, response: undefined };
}

export const RldMessage = {
  encode(
    message: RldMessage,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RldMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRldMessage();
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

  fromJSON(object: any): RldMessage {
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

  toJSON(message: RldMessage): unknown {
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

  fromPartial<I extends Exact<DeepPartial<RldMessage>, I>>(
    object: I,
  ): RldMessage {
    const message = createBaseRldMessage();
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

function createBaseRldInfo(): RldInfo {
  return { id: 0, flags: 0, px: 0, py: 0 };
}

export const RldInfo = {
  encode(
    message: RldInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.flags !== 0) {
      writer.uint32(16).int32(message.flags);
    }
    if (message.px !== 0) {
      writer.uint32(24).int32(message.px);
    }
    if (message.py !== 0) {
      writer.uint32(32).int32(message.py);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RldInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRldInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.flags = reader.int32();
          break;
        case 3:
          message.px = reader.int32();
          break;
        case 4:
          message.py = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RldInfo {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      px: isSet(object.px) ? Number(object.px) : 0,
      py: isSet(object.py) ? Number(object.py) : 0,
    };
  },

  toJSON(message: RldInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.px !== undefined && (obj.px = Math.round(message.px));
    message.py !== undefined && (obj.py = Math.round(message.py));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RldInfo>, I>>(object: I): RldInfo {
    const message = createBaseRldInfo();
    message.id = object.id ?? 0;
    message.flags = object.flags ?? 0;
    message.px = object.px ?? 0;
    message.py = object.py ?? 0;
    return message;
  },
};

function createBaseSetRldInfo(): SetRldInfo {
  return {};
}

export const SetRldInfo = {
  encode(_: SetRldInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetRldInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetRldInfo();
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

  fromJSON(_: any): SetRldInfo {
    return {};
  },

  toJSON(_: SetRldInfo): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetRldInfo>, I>>(_: I): SetRldInfo {
    const message = createBaseSetRldInfo();
    return message;
  },
};

function createBaseSetRldInfo_Response(): SetRldInfo_Response {
  return {};
}

export const SetRldInfo_Response = {
  encode(
    _: SetRldInfo_Response,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetRldInfo_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetRldInfo_Response();
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

  fromJSON(_: any): SetRldInfo_Response {
    return {};
  },

  toJSON(_: SetRldInfo_Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetRldInfo_Response>, I>>(
    _: I,
  ): SetRldInfo_Response {
    const message = createBaseSetRldInfo_Response();
    return message;
  },
};

function createBaseSetRldInfo_Request(): SetRldInfo_Request {
  return { info: undefined };
}

export const SetRldInfo_Request = {
  encode(
    message: SetRldInfo_Request,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.info !== undefined) {
      RldInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetRldInfo_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetRldInfo_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = RldInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetRldInfo_Request {
    return {
      info: isSet(object.info) ? RldInfo.fromJSON(object.info) : undefined,
    };
  },

  toJSON(message: SetRldInfo_Request): unknown {
    const obj: any = {};
    message.info !== undefined &&
      (obj.info = message.info ? RldInfo.toJSON(message.info) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetRldInfo_Request>, I>>(
    object: I,
  ): SetRldInfo_Request {
    const message = createBaseSetRldInfo_Request();
    message.info =
      object.info !== undefined && object.info !== null
        ? RldInfo.fromPartial(object.info)
        : undefined;
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
