import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class IndentServiceService {

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

  InsertIndent(body:any){
    return this.request('post', `${baseUrl}/indent/`, body);
  }

  GetIndentsInfo(){
    return this.request('get', `${baseUrl}/indent/`);
  }
}
