import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { googleData } from '../models/google.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor (private http: HttpClient) { }
  getGoogleData(searchItem: string): Observable<any>{
    return this.http.get<any>(environment.GoogleApiUrl, {
      headers: new HttpHeaders()
      .set(environment.GoogleHostHeaderName,environment.GoogleHostHeaderValue)
      .set(environment.GoogleKeyHeaderName,environment.GoogleKeyHeaderValue),
      params: new HttpParams()
      .set("q", searchItem)
      .set("hl","en")
      .set("tbs","qdr:a")
    
  })
}
}