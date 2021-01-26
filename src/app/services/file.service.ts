import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  api = {
    base_url: "http://localhost:6060"
  };

  constructor(
    private http: HttpClient,
  )  { }

  logFlag = false;
  
   myLogin (data) : Observable<any>{
    console.log('data---->>>', data);
    // return this.http.post(this.api.base_url + '/demoAdminlogin', data);
    return this.http.post(this.api.base_url + '/login', data);
    
  }
  upload(formData){
    console.log('data before sending to backend--->>>',formData);
    return this.http.post(this.api.base_url + '/fileUpload', formData ,{ reportProgress: true, observe: 'events' }); 
  }
  getFiles(){
    // console.log('data before sending to backend--->>>',);
    return this.http.post<any>(this.api.base_url  + '/getFiles', {}); 
  }
  deleteFiles(data){
    // console.log('data before sending to backend--->>>',data);
    return this.http.post<any>(this.api.base_url  + '/deleteFile', data); 
  }
  register(temp,ip){
    let data={
      ipAddress:ip,
      userdata:temp
    }
    console.log('data before sending to backend register---------------------->>>',data);
    return this.http.post<any>(this.api.base_url  + '/register', data); 
  }
  getIPAddress()
  {
    return this.http.get("http://api.ipify.org/?format=json");
  }

}
