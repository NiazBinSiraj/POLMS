import { AppState } from 'src/app-state';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

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

  //Admin User
  GetAdminUsersInfo(){
    return this.request('get', `${baseUrl}/admin/${AppState.instance.user_id}`);
  }

  GetAllAdminsInfo(){
    return this.request('get', `${baseUrl}/admin/`);
  }

  UpdateAdminInfo(body:any){
    return this.request('put', `${baseUrl}/admin/`, body);
  }

  DeleteAdmin(body:any){
    return this.request('delete', `${baseUrl}/admin/`, body);
  }

  CreateNewAdmin(body:any){
    return this.request('post', `${baseUrl}/admin/`, body);
  }

  ChangeAdminPassword(body:any){
    return this.request('put', `${baseUrl}/admin/changePassword`, body);
  }


//NCO User
  CreateNewNCO(body:any){
    return this.request('post', `${baseUrl}/nco`, body);
  }

  GetAllNCOInfo(){
    return this.request('get', `${baseUrl}/nco`);
  }

  UpdateNCOInfo(body:any){
    return this.request('put', `${baseUrl}/nco`, body);
  }

  DeleteNCO(body:any){
    return this.request('delete', `${baseUrl}/nco`, body);
  }


  //Driver User
  CreateNewDriver(body:any){
    return this.request('post', `${baseUrl}/driver`, body);
  }

  GetAllDriverInfo(){
    return this.request('get', `${baseUrl}/driver`);
  }

  UpdateDriverInfo(body:any){
    return this.request('put', `${baseUrl}/driver`, body);
  }

  DeleteDriver(body:any){
    return this.request('delete', `${baseUrl}/driver`, body);
  }

}
