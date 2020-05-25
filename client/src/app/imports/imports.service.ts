import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImportsService {
  
  private baseUrl = 'http://localhost:8080/imports'
  
  constructor(private http: HttpClient) { }
  getImports(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createImports(imports: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, imports);
  }

  updateImports(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteImports(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});

  }

  getImportsList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
}
