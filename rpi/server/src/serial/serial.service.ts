import * as cobs from 'cobs';

import { SerialPort } from 'serialport'
import { DelimiterParser } from '@serialport/parser-delimiter';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SerialService {

    private serialport: SerialPort;
    private parser: DelimiterParser;

    constructor() {

    }

    public connect() {
        try {
            this.serialport = new SerialPort({ path: '/dev/example', baudRate: 9600 });
            this.parser = this.serialport.pipe(new DelimiterParser({ delimiter: '\0' }));
            this.parser.on('data', this.handleData);
            this.parser.on('error', console.log);
        } catch {
            setTimeout(this.connect, 5000);
        }
    }

    private handleData(data: Buffer) {
        const decoded = cobs.decode(data);
        console.log(decoded);
    }
}
