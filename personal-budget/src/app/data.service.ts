import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any[] = []; 

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any[]> {
    if (this.data.length === 0) {
     
      return this.http.get<any[]>('http://localhost:3000/budget');
    } else {
      
      return of(this.data);
    }
  }

  setData(data: any[]): void {
    
    this.data = data;
  }
}
