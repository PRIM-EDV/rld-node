import * as cobs from 'cobs';

import { SerialPort } from 'serialport'
import { DelimiterParser } from '@serialport/parser-delimiter';
import { Injectable } from '@nestjs/common';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

const MAPTOOL_HOSTNAME = process.env.RLD_MAPTOOL_HOSTNAME ? process.env.RLD_MAPTOOL_HOSTNAME : 'localhost';
const MAPTOOL_PORT = process.env.RLD_MAPTOOL_PORT ? process.env.RLD_MAPTOOL_PORT : 3200;


@Injectable()
export class AppService {

    private serialport = new SerialPort({ path: '/dev/example', baudRate: 9600 });
    private parser = this.serialport.pipe(new DelimiterParser({ delimiter: '\0' }));

    private ws: WebSocketSubject<any> = webSocket({url: `ws://${MAPTOOL_HOSTNAME}:${MAPTOOL_PORT}`, openObserver: { next: this.handleWsOpen }});

    constructor() {
        this.parser.on('data', this.handleData);
        this.parser.on('error', console.log);

        this.ws.subscribe({
            next: this.handleWsMessage.bind(this),
            error: (err) => {},
            complete: this.handleWsClose.bind(this)
        });
    }

    private handleWsOpen() {

    }

    private handleWsMessage(buffer: {event: 'msg', data: string}) {

    }

    private handleWsClose() {

    }

    private handleData(data: Buffer) {
        const decoded = cobs.decode(data);
        console.log(decoded);
    }
}
