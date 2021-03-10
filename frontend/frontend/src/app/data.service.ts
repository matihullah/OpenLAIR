import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  uri='http://localhost:4000';
  loggedIn = false;
  
  constructor(private http: HttpClient) { 
    
  }



  getdata(){
    return this.http.get(`${this.uri}/display/data`);
  }


  getsearchresult(search:any){
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'text/plain',
      })
  }
    return this.http.post(`${this.uri}/getsearchmetrics`,{search, httpOptions});
  }

  getsearchind(search:any){
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'text/plain',
      })
  }
    return this.http.post(`${this.uri}/getsearchindicator`,{search, httpOptions});
  }

  addData(LearningEvents,LearningActivities,indicator,metrics)
  {
    const data1={
      LearningEvents:LearningEvents,
      LearningActivities:{
      Name:LearningActivities,
      indicator:{
        indicatorName:indicator,
        metrics:metrics
        
      }
      }
    };
    return this.http.post(`${this.uri}/add/data`,data1);


  }

  login(username,password){
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'text/plain',
      })
  }
  
    return this.http.post(`${this.uri}/login`,{username,password, httpOptions});
  }
  isLoggedIn():boolean{
    return this.loggedIn;
  }


  }
