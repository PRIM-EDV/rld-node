import { Injectable } from '@nestjs/common';
import { RldMessage } from 'proto/protocol';
import { Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

const MAPTOOL_HOSTNAME = process.env.RLD_MAPTOOL_HOSTNAME ? process.env.RLD_MAPTOOL_HOSTNAME : 'localhost';
const MAPTOOL_PORT = process.env.RLD_MAPTOOL_PORT ? process.env.RLD_MAPTOOL_PORT : 3200;

@Injectable()
export class WebsocketService {

    public onMessage: Subject<RldMessage> = new Subject<RldMessage>();
    public onOpen: Subject<void> = new Subject<void>();
    public onClose: Subject<void> = new Subject<void>();

    private ws: WebSocketSubject<any>;

    constructor() {
        this.ws.subscribe({
            next: this.handleWsMessage.bind(this),
            error: (err) => {},
            complete: this.handleWsClose.bind(this)
        });
    }

    public connect() {
        this.ws = webSocket({url: `ws://${MAPTOOL_HOSTNAME}:${MAPTOOL_PORT}`, openObserver: { next: this.handleWsOpen }});
    }

    public send() {

    }

    private handleWsOpen() {
        this.onOpen.next();
    }

    private handleWsMessage(buffer: {event: 'msg', data: string}) {
        // const msg =
    }

    private handleWsClose() {
        this.onClose.next();
        setTimeout(this.connect, 5000);
    }
}
