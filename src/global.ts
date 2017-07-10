import { Injectable } from '@angular/core';

@Injectable()
export class AppGlobals {
    public sessionId: string;
    public baseUrl = 'https://mimobotnode.au-syd.mybluemix.net/';
    // public baseUrl = 'http://localhost:3000/';
}