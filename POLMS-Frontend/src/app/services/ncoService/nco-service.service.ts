import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class NcoServiceService {

  constructor(private http: HttpClient) { }

  private async request(method: string, url: string, data?: any) {
    console.log('request ' + JSON.stringify(data));
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
    });
    return new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }

  InsertPOLLedger(body:any){
    return this.request('post', `${baseUrl}/polentry/`, body);
  }

  GetPOLLedgerEntryHistory(){
    return this.request('get', `${baseUrl}/polentry/`);
  }
}
