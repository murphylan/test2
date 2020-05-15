import { Injectable } from '@angular/core';
import { Student } from './student';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private inventorySubject$ = new BehaviorSubject<Student[]>(null);
  constructor(private http: HttpClient) { }

  private studentUrl = 'https://my-json-server.typicode.com/murphylan/json/students';  // REST API地址

  getUsers(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl); // 指定响应类型为Student接口数组
  }

  getLatestInventory(): Observable<Student[]> {
    return this.inventorySubject$.asObservable();
  }

  addToInventory(t: Student[]) {
    this.inventorySubject$.next(t);
  }
}
