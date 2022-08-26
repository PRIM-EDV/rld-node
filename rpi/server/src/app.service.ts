import * as cobs from 'cobs';

import { SerialPort } from 'serialport'
import { DelimiterParser } from '@serialport/parser-delimiter';

import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {

    public serialport = new SerialPort({ path: '/dev/example', baudRate: 9600 });
    public parser = this.serialport.pipe(new DelimiterParser({ delimiter: '\0' }));

    constructor() {
        this.parser.on('data', this.handleData)
    }

    handleData(data: Buffer) {
        const decoded = cobs.decode(data);
        console.log(decoded);
    }
}
