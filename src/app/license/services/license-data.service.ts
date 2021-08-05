import { map } from 'rxjs/operators';
import {  BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Content } from './../interfaces/license.interface';
import { Licenses } from '../interfaces/license.interface';

@Injectable({
  providedIn: 'root'
})



export class LicenseDataService {

  private apiUrl: string = 'https://api.jsonbin.io/b/5f0887eb5d4af74b0129dd77'
  private apiKey: string = '$2b$10$AWmu8j9bAuK4kJ3AmMrDM.TMEFkxC/KIxqgCvhxffaqyOZcsgb7eC'
  dataId$ = new BehaviorSubject<Content[]>([])
  

  constructor(private http: HttpClient) { }

  getData(): Observable<Content[]>{
    const headers = new HttpHeaders( {'secret-key': this.apiKey} )
    return this.http.get<Licenses>( this.apiUrl, { headers } )
    .pipe(
      map((item: Licenses ) => item.content)
    )
  }


}

